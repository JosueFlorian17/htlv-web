"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { initialContentData } from '../data/initialContent';

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    // Initial state setup from initialContentData
    const initial = {};
    Object.keys(initialContentData).forEach((key) => {
      initial[key] = {
        ...initialContentData[key],
        currentValue: initialContentData[key].defaultValue,
        status: 'Pendiente'
      };
    });
    return initial;
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle' | 'saving' | 'saved' | 'error'
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const saveTimeoutRef = useRef(null);
  const pendingUpdatesRef = useRef({});

  // 1. Fetch saved content on mount
  useEffect(() => {
    async function loadContent() {
      try {
        // Try local storage first for fast response
        const cached = localStorage.getItem('htlv_web_content_cache');
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            setContent((prev) => ({ ...prev, ...parsed }));
          } catch (e) {
            console.error('Error parsing local cache:', e);
          }
        }

        // Fetch from backend API
        const res = await fetch('/api/content');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setContent(json.data);
            localStorage.setItem('htlv_web_content_cache', JSON.stringify(json.data));
          }
        }
      } catch (err) {
        console.warn('Using local content defaults:', err);
      }
    }
    loadContent();
  }, []);

  // 2. Debounced save to API and localStorage
  const triggerPersist = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    setSaveStatus('saving');

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        const payload = pendingUpdatesRef.current;
        pendingUpdatesRef.current = {};

        const res = await fetch('/api/content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ updates: payload })
        });

        if (res.ok) {
          setSaveStatus('saved');
          const nowStr = new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          setLastSavedTime(nowStr);
          setTimeout(() => setSaveStatus('idle'), 3000);
        } else {
          setSaveStatus('error');
        }
      } catch (e) {
        console.error('Error saving content:', e);
        setSaveStatus('error');
      }
    }, 600); // 600ms debounce
  }, []);

  // 3. Update single text key
  const updateText = useCallback((id, newValue, status = 'Modificado') => {
    setContent((prev) => {
      const item = prev[id] || initialContentData[id] || {};
      const updated = {
        ...prev,
        [id]: {
          ...item,
          id,
          currentValue: newValue,
          status,
          updatedAt: new Date().toISOString()
        }
      };

      // Save to localStorage immediately
      try {
        localStorage.setItem('htlv_web_content_cache', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }

      return updated;
    });

    // Queue API update
    pendingUpdatesRef.current[id] = { value: newValue, status };
    triggerPersist();
  }, [triggerPersist]);

  // 4. Reset all content to initial defaults
  const resetAllContent = useCallback(async () => {
    if (!confirm('¿Estás seguro de restablecer todos los textos a los valores predeterminados? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      setSaveStatus('saving');
      await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resetAll: true })
      });

      localStorage.removeItem('htlv_web_content_cache');

      const initial = {};
      Object.keys(initialContentData).forEach((key) => {
        initial[key] = {
          ...initialContentData[key],
          currentValue: initialContentData[key].defaultValue,
          status: 'Pendiente'
        };
      });

      setContent(initial);
      setSaveStatus('saved');
      setLastSavedTime('Restablecido');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.error(e);
      setSaveStatus('error');
    }
  }, []);

  // 5. Download Excel directly from API
  const downloadExcel = useCallback(() => {
    window.location.href = '/api/content/export-excel';
  }, []);

  // Helper to get text by ID
  const getText = useCallback((id, fallback = '') => {
    return content[id]?.currentValue !== undefined ? content[id].currentValue : (initialContentData[id]?.defaultValue || fallback);
  }, [content]);

  return (
    <ContentContext.Provider
      value={{
        content,
        isEditMode,
        setIsEditMode,
        saveStatus,
        lastSavedTime,
        updateText,
        resetAllContent,
        downloadExcel,
        getText,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
