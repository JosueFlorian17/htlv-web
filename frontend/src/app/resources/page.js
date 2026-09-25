"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('interactive-videos');
  const [searchQuery, setSearchQuery] = useState('');

  // -------------------------------------------------------------
  // ESTADO Y LÓGICA: REPRODUCTOR DE VIDEOS INTERACTIVOS (QUIZ INTEGRADO)
  // -------------------------------------------------------------
  const videoLessons = [
    {
      id: 'video-youtube-1',
      title: 'Video Documental de Referencia: Biología y Manejo de Retrovirus HTLV',
      duration: 'YouTube HD',
      category: 'Conferencia & Referencia',
      desc: 'Video educativo de referencia sobre la caracterización viral, impacto global y diagnóstico de HTLV transmitido en plataformas científicas internacionales.',
      isYoutube: true,
      youtubeId: '6Aa3aFccue8',
      thumbnail: 'https://img.youtube.com/vi/6Aa3aFccue8/hqdefault.jpg',
      checkpoints: [
        {
          timePercent: 40,
          timeLabel: '2:15',
          question: '¿Por qué el HTLV-1 requiere un monitoreo periódico de carga proviral en lugar de carga viral libre plasmática?',
          options: [
            'Porque el virus está integrado en el ADN celular de los linfocitos (provirus) y no suele flotar libre en plasma',
            'Porque la sangre destruye de inmediato las proteínas virales',
            'Porque solo infecta células del hígado',
            'Porque las pruebas de PCR no funcionan en virus'
          ],
          correct: 0,
          explanation: 'A diferencia del VIH que produce millones de viriones libres en sangre, el HTLV se mantiene como provirus integrado dentro de los linfocitos T CD4+, por lo que se cuantifican copias por cada 100 PBMC.'
        }
      ]
    },
    {
      id: 'video-1',
      title: 'Mecanismos de Transmisión y Sinapsis Viral del HTLV-1',
      duration: '4:15 min',
      category: 'Virología & Patogénesis',
      desc: 'Análisis detallado de cómo el virus se propaga célula a célula a través de la sinapsis virológica y biofilmes extracelulares.',
      isYoutube: false,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARYfAPMBJO95i3OeJqqO1e7PkQnZJtJw7yNBXqmtQc732fQblkTRZG4DLSA4ZAWAAZET0kb6fswrdyxKxCSTWdNRzWGmqfXfYwNLfipwH-p0-m5pXwrZHhnD_a14J9vF5G_IXD3aTl9SyWGwUZadWt6QIpMv8UVhmzRJcE7rURVkVIVqKV9mAY8x7yJ_a9JIfY6JlAAtTqwRCh4kffaOH-fkTmaX0Wo3JhcklYl6kNKHpWPe4B7HgLBpfAzi1F4nG0eOCwUV70CbA',
      checkpoints: [
        {
          timePercent: 30,
          timeLabel: '1:15',
          question: '¿Cuál es el mecanismo celular predominante de transmisión del HTLV-1 en el organismo?',
          options: [
            'Contacto directo célula a célula mediante sinapsis virológica',
            'Liberación masiva de viriones libres en el plasma (como el VIH)',
            'Transmisión por gotas respiratorias y aerosoles',
            'Infección exclusiva de eritrocitos maduros'
          ],
          correct: 0,
          explanation: 'El HTLV-1 se propaga casi exclusivamente a través de contacto célula a célula mediante la sinapsis virológica, transfiriendo el material genético de un linfocito infectado a uno no infectado.'
        },
        {
          timePercent: 70,
          timeLabel: '3:00',
          question: '¿Qué medida preventiva primaria reduce drásticamente la transmisión vertical en madres seropositivas?',
          options: [
            'Aislamiento del neonato por 6 meses',
            'Sustitución de lactancia materna prolongada por fórmula infantil segura',
            'Tratamiento con antibióticos de amplio espectro',
            'Vacunación obligatoria al nacer'
          ],
          correct: 1,
          explanation: 'La suspensión de la lactancia materna y el uso de sucedáneos (fórmula) previene hasta el 85-90% de los casos de transmisión vertical de madre a hijo.'
        }
      ]
    },
    {
      id: 'video-2',
      title: 'Diagnóstico Diferencial: Paraparesia Espástica Tropical (HAM/TSP)',
      duration: '5:40 min',
      category: 'Clínica & Neurología',
      desc: 'Criterios clínicos de Osame, análisis de líquido cefalorraquídeo y evaluación de carga proviral en pacientes con compromiso motor.',
      isYoutube: false,
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuXvO2-W-DPohAm0t3r6ufv176Em3axy9Q9TMOk3GBfqlKMStSeHmEsbpuVTTZN7f7pAkRPumO-Jqp79EnGUSIy8cSXKJxEc-t895RwABRrggDXIXbiY5p-NgWLSsLDHG79IP7Ee4bmaWLPDqRitTo1i9ORnmNswwL3-CCWxX-QtwWLhQTrxvs0X6UwfsSPRkFPiOT27UbLsWyJ3d6VRmLM7qzGlDOLirarSjBi_Gy_3OJea_Q0aZCOYZBKRWTBq-n0tnxLukm38k',
      checkpoints: [
        {
          timePercent: 50,
          timeLabel: '2:50',
          question: 'En un paciente con sospecha de HAM/TSP, ¿qué hallazgo en LCR confirma el compromiso retroviral?',
          options: [
            'Ausencia total de anticuerpos y glucosa elevada',
            'Presencia de anticuerpos anti-HTLV-1 con síntesis intratecal y bandas oligoclonales',
            'Presencia de bacterias Gram negativas',
            'Disminución severa de hematocrito'
          ],
          correct: 1,
          explanation: 'El diagnóstico confirmatorio de HAM/TSP requiere la demostración de anticuerpos anti-HTLV-1 en LCR, demostrando inflamación intratecal específica.'
        }
      ]
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(videoLessons[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [completedCheckpoints, setCompletedCheckpoints] = useState({});

  // Simulación de avance del video interactivo cuando no es un iframe externo
  useEffect(() => {
    let interval = null;
    if (isPlaying && !activeCheckpoint && !selectedVideo.isYoutube) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          const cp = selectedVideo.checkpoints.find(
            (c) => Math.abs(c.timePercent - next) <= 0.5 && !completedCheckpoints[`${selectedVideo.id}-${c.timePercent}`]
          );
          if (cp) {
            setIsPlaying(false);
            setActiveCheckpoint(cp);
            setSelectedOption(null);
            setQuizFeedback(null);
            return cp.timePercent;
          }
          if (next >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return next;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeCheckpoint, selectedVideo, completedCheckpoints]);

  const handleOptionSubmit = () => {
    if (selectedOption === null || !activeCheckpoint) return;
    const isCorrect = selectedOption === activeCheckpoint.correct;
    setQuizFeedback({
      correct: isCorrect,
      explanation: activeCheckpoint.explanation
    });
    if (isCorrect) {
      setUserScore((prev) => prev + 50);
    }
    setCompletedCheckpoints((prev) => ({
      ...prev,
      [`${selectedVideo.id}-${activeCheckpoint.timePercent}`]: true
    }));
  };

  const handleContinuePlayback = () => {
    setActiveCheckpoint(null);
    setSelectedOption(null);
    setQuizFeedback(null);
    if (!selectedVideo.isYoutube) {
      setIsPlaying(true);
    }
  };

  const handleDismissModal = () => {
    setActiveCheckpoint(null);
    setSelectedOption(null);
    setQuizFeedback(null);
  };

  // -------------------------------------------------------------
  // ESTADO Y LÓGICA: CALCULADORA DE RIESGO CLÍNICO Y CARGA PROVIRAL
  // -------------------------------------------------------------
  const [proviralLoad, setProviralLoad] = useState(4.5);
  const [infectionDuration, setInfectionDuration] = useState(10);
  const [symptoms, setSymptoms] = useState({
    spasticity: false,
    urinary: false,
    uveitis: false,
    dermatitis: false
  });

  const calculateRisk = () => {
    let score = proviralLoad * 8;
    if (infectionDuration > 15) score += 20;
    if (symptoms.spasticity) score += 35;
    if (symptoms.urinary) score += 25;
    if (symptoms.uveitis) score += 15;
    if (symptoms.dermatitis) score += 10;

    let tier = 'BAJO';
    let color = 'text-green-700 bg-green-50 border-green-200';
    let recommendation = 'Control serológico y neurológico anual estándar. No requiere terapia modificadora de enfermedad inmediata.';

    if (score >= 40 && score < 75) {
      tier = 'MODERADO';
      color = 'text-amber-700 bg-amber-50 border-amber-200';
      recommendation = 'Evaluación semestral de carga proviral por PCR cuantitativa, interconsulta neurológica y despistaje de estrongiloidiasis.';
    } else if (score >= 75) {
      tier = 'ALTO (Sospecha de Progresión)';
      color = 'text-red-700 bg-red-50 border-red-200';
      recommendation = 'Activación de protocolo multidisciplinario (Infectología, Neurología, Hematología). Considerar punción lumbar y resonancia de médula espinal.';
    }

    return { score: Math.min(Math.round(score), 100), tier, color, recommendation };
  };

  const riskResult = calculateRisk();

  // -------------------------------------------------------------
  // ESTADO Y LÓGICA: FORMULARIO INTERACTIVO REFERENCIAL DE NOTIFICACIÓN
  // -------------------------------------------------------------
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ageRange: '30-49',
    region: 'Lima / Callao',
    serologyType: 'HTLV-1',
    clinicalState: 'Asintomático',
    proviralAvailable: 'Si',
    consentGranted: false
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.consentGranted) {
      alert('Por favor acepte la cláusula de tratamiento de datos según la Ley N° 29733.');
      return;
    }
    setFormSubmitted(true);
  };

  // -------------------------------------------------------------
  // MOTOR 3D INTERACTIVO CON ARRASTRE DE MOUSE / TOUCH (GENUINE 3D ENGINE)
  // -------------------------------------------------------------
  const canvasRef = useRef(null);
  const [modelType, setModelType] = useState('virion'); // 'virion' | 'tax'
  const [zoom, setZoom] = useState(1);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const rotXRef = useRef(0.35);
  const rotYRef = useRef(0.45);
  const zoomRef = useRef(1);
  const autoRotateRef = useRef(true);
  const modelTypeRef = useRef('virion');

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    autoRotateRef.current = isAutoRotating;
  }, [isAutoRotating]);

  useEffect(() => {
    modelTypeRef.current = modelType;
  }, [modelType]);

  // Puntos 3D para el virión (Esfera con espículas)
  const virionSpikes = useRef(
    Array.from({ length: 36 }, (_, i) => {
      const phi = Math.acos(-1 + (2 * i) / 36);
      const theta = Math.sqrt(36 * Math.PI) * phi;
      return {
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi)
      };
    })
  );

  // Puntos 3D para la proteína Tax (Cadena helicoidal ribbon)
  const taxProteinNodes = useRef(
    Array.from({ length: 48 }, (_, i) => {
      const t = (i / 48) * Math.PI * 6;
      return {
        x: Math.cos(t) * 0.7,
        y: (i / 48) * 2 - 1,
        z: Math.sin(t) * 0.7,
        type: i % 4 === 0 ? 'active-site' : 'helix'
      };
    })
  );

  // Manejo de eventos de ratón para rotación 3D
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    setIsAutoRotating(false);
    autoRotateRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMousePosRef.current.x;
    const deltaY = e.clientY - lastMousePosRef.current.y;
    rotYRef.current += deltaX * 0.015;
    rotXRef.current += deltaY * 0.015;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Manejo de eventos touch en móviles
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setIsAutoRotating(false);
      autoRotateRef.current = false;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - lastMousePosRef.current.x;
    const deltaY = e.touches[0].clientY - lastMousePosRef.current.y;
    rotYRef.current += deltaX * 0.02;
    rotXRef.current += deltaY * 0.02;
    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Renderizado continuo en Canvas 3D (Loop de 60fps desacoplado del estado)
  useEffect(() => {
    if (activeTab !== 'embeds') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const currentZoom = zoomRef.current;
      const baseRadius = 65 * currentZoom;
      const curRotX = rotXRef.current;
      const curRotY = rotYRef.current;
      const currentModel = modelTypeRef.current;

      // Transformación 3D (Matrices de rotación X e Y)
      const rotate3D = (x, y, z) => {
        // Rotación alrededor de Y
        const cosY = Math.cos(curRotY);
        const sinY = Math.sin(curRotY);
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;

        // Rotación alrededor de X
        const cosX = Math.cos(curRotX);
        const sinX = Math.sin(curRotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        // Proyección de perspectiva
        const perspective = 300 / (300 + z2);
        return {
          px: cx + x1 * perspective,
          py: cy + y2 * perspective,
          pz: z2,
          scale: perspective
        };
      };

      if (currentModel === 'virion') {
        // 1. Dibujar espículas posteriores (profundidad z < 0)
        virionSpikes.current.forEach((pt) => {
          const spikeEnd = rotate3D(pt.x * (baseRadius + 24), pt.y * (baseRadius + 24), pt.z * (baseRadius + 24));
          const spikeBase = rotate3D(pt.x * baseRadius, pt.y * baseRadius, pt.z * baseRadius);
          if (spikeEnd.pz < 0) {
            ctx.beginPath();
            ctx.moveTo(spikeBase.px, spikeBase.py);
            ctx.lineTo(spikeEnd.px, spikeEnd.py);
            ctx.strokeStyle = '#555f6f88';
            ctx.lineWidth = 2 * spikeEnd.scale;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(spikeEnd.px, spikeEnd.py, 4 * spikeEnd.scale, 0, Math.PI * 2);
            ctx.fillStyle = '#555f6f';
            ctx.fill();
          }
        });

        // 2. Dibujar la esfera central del Virión (Cápside y envoltura lipídica)
        const grad = ctx.createRadialGradient(cx - 20 * currentZoom, cy - 20 * currentZoom, 10, cx, cy, baseRadius);
        grad.addColorStop(0, '#ffb3b5');
        grad.addColorStop(0.4, '#a22f3d');
        grad.addColorStop(0.8, '#5b0617');
        grad.addColorStop(1, '#1e0207');

        ctx.beginPath();
        ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.shadowColor = 'rgba(244, 63, 94, 0.4)';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Núcleo proviral interno animado
        ctx.beginPath();
        ctx.arc(cx, cy, 28 * currentZoom, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffdada';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('ARN+ (Tax/HBZ)', cx, cy + 4);

        // 3. Dibujar espículas anteriores (profundidad z >= 0)
        virionSpikes.current.forEach((pt) => {
          const spikeEnd = rotate3D(pt.x * (baseRadius + 24), pt.y * (baseRadius + 24), pt.z * (baseRadius + 24));
          const spikeBase = rotate3D(pt.x * baseRadius, pt.y * baseRadius, pt.z * baseRadius);
          if (spikeEnd.pz >= 0) {
            ctx.beginPath();
            ctx.moveTo(spikeBase.px, spikeBase.py);
            ctx.lineTo(spikeEnd.px, spikeEnd.py);
            ctx.strokeStyle = '#93c5fd';
            ctx.lineWidth = 3 * spikeEnd.scale;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(spikeEnd.px, spikeEnd.py, 5.5 * spikeEnd.scale, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      } else if (currentModel === 'tax') {
        // Renderizado de Oncoproteína Tax (Cadena tridimensional helicoidal)
        ctx.strokeStyle = '#fda4af';
        ctx.lineWidth = 3.5 * currentZoom;
        ctx.beginPath();

        const projectedNodes = taxProteinNodes.current.map((node) => {
          return {
            ...node,
            ...rotate3D(node.x * 65 * currentZoom, node.y * 65 * currentZoom, node.z * 65 * currentZoom)
          };
        });

        projectedNodes.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.px, p.py);
          else ctx.lineTo(p.px, p.py);
        });
        ctx.stroke();

        // Ordenar nodos por profundidad (z) para renderizado correcto
        projectedNodes
          .sort((a, b) => a.pz - b.pz)
          .forEach((node) => {
            ctx.beginPath();
            const radius = (node.type === 'active-site' ? 7 : 4.5) * node.scale * currentZoom;
            ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
            ctx.fillStyle = node.type === 'active-site' ? '#f43f5e' : '#38bdf8';
            if (node.type === 'active-site') {
              ctx.shadowColor = '#f43f5e';
              ctx.shadowBlur = 12;
            } else {
              ctx.shadowColor = '#38bdf8';
              ctx.shadowBlur = 6;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          });

        ctx.fillStyle = '#f1f5f9';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Oncoproteína Tax (Dominio Zinc Finger)', cx, cy + 95 * currentZoom);
      }

      if (autoRotateRef.current) {
        rotYRef.current += 0.01;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTab]);

  // -------------------------------------------------------------
  // RECURSOS DESCARGABLES CLÁSICOS
  // -------------------------------------------------------------
  const downloadableResources = [
    {
      title: 'Guía Visual de la Transmisión Celular de HTLV-1',
      desc: 'Mapeo visual de alta resolución sobre las sinapsis virales de HTLV-1 y propagación célula a célula.',
      type: 'INFOGRAFÍA',
      meta: 'PNG, 4.2 MB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARYfAPMBJO95i3OeJqqO1e7PkQnZJtJw7yNBXqmtQc732fQblkTRZG4DLSA4ZAWAAZET0kb6fswrdyxKxCSTWdNRzWGmqfXfYwNLfipwH-p0-m5pXwrZHhnD_a14J9vF5G_IXD3aTl9SyWGwUZadWt6QIpMv8UVhmzRJcE7rURVkVIVqKV9mAY8x7yJ_a9JIfY6JlAAtTqwRCh4kffaOH-fkTmaX0Wo3JhcklYl6kNKHpWPe4B7HgLBpfAzi1F4nG0eOCwUV70CbA'
    },
    {
      title: 'Directriz Clínica de Diagnóstico Serológico y Molecular',
      desc: 'Protocolo estandarizado para la diferenciación ELISA, Western Blot y PCR cuantitativa en tiempo real.',
      type: 'PDF OFICIAL',
      meta: 'PDF, 1.8 MB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs_ADncYu3IQcJxFxpu0kOP5pnS5GRkFRzvvkbICMG9Oce33JHFTQMkyP57gtCJFnApfDqwtjpwgQIAbwBpW6NORgt4yacS-7hR-5Jn36QwK3D_oF6d8lVu-mxR5XBVZF3JxLuN0BgZ6OYdwqa7Jg3VOZt3oeq1Lg53YUd-kANDXPw9GnZm325dFVQcBEgNK6jF3lw42RuqJftpYNO_oUBbsU22bdCqK2yU_cFbh59CClyAAVbeZLjqwkhDPGvfXp5NihQfRV0vss'
    },
    {
      title: 'Manual de Procedimientos de Laboratorio',
      desc: 'Instrucciones para el procesamiento de muestras biológicas y cálculo de carga proviral en PBMC.',
      type: 'MANUAL',
      meta: 'PDF, 850 KB',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCFzJcS4XQz33g1ZOJF2fMADRrJ4Nk-Y9FK0qHMT6qq9Vx8MvtJeMNGwWd2Wvl8Urz8v0DmcRl1XRgSn6DlQQ0DZ4NZz2xSY-YjVh_Ugtfkv3MXwuRiP7qvrXdRAMbYsfo7RMKGVqbqKC5plim7MELc13qU6FgZmE9huyF7E2xbcWWVbQNVRMGjShge2DotpHtNsCYLSNLSEhDTrw9esDxvK6-kcLZKq5W2zhFiAsLhwSfQYEP_p6LeRo-eX9wQFqouvK0hCBD77Q'
    }
  ];

  return (
    <main className="py-10 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
      {/* Cabecera Principal */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#dcc0c0] pb-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-block px-3 py-0.5 bg-[#ffdada] text-[#5b0617] text-[11px] uppercase font-bold tracking-wider rounded-full">
                Centro Multimedia & Educación Biomédica
              </span>
              <span className="inline-block px-3 py-0.5 bg-[#d6e0f3] text-[#1d2b3a] text-[11px] font-semibold rounded-full">
                Videos, 3D & Herramientas
              </span>
            </div>
            <h1 className="font-display text-[32px] md:text-[40px] text-[#5b0617] mb-2 leading-tight">
              Recursos, Videos Interactivos & Herramientas
            </h1>
            <p className="text-[14px] md:text-[15.5px] text-[#564242] leading-relaxed">
              Explora simuladores clínicos, videos educativos de referencia y conferencias en YouTube con evaluaciones integradas, modelos macromoleculares 3D manipulables y formularios respaldados por la Red RIII-HTLV y la UPCH.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2.5 rounded-xl border border-[#dcc0c0] shadow-xs text-center">
              <span className="block text-[11px] uppercase font-bold text-[#897172]">Puntaje Acumulado</span>
              <span className="text-[20px] font-black text-[#5b0617]">{userScore} pts</span>
            </div>
          </div>
        </div>

        {/* Pestañas de Navegación de la Sección */}
        <div className="flex flex-wrap gap-2 mt-6 border-b border-[#dcc0c0]/60 pb-2">
          <button
            onClick={() => setActiveTab('interactive-videos')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13.5px] transition-all cursor-pointer ${
              activeTab === 'interactive-videos'
                ? 'bg-[#5b0617] text-white shadow-sm'
                : 'bg-white text-[#564242] hover:bg-[#f3f4f6] border border-[#dcc0c0]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            Videos & YouTube (Con Quizzes)
          </button>
          <button
            onClick={() => setActiveTab('calculators')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13.5px] transition-all cursor-pointer ${
              activeTab === 'calculators'
                ? 'bg-[#5b0617] text-white shadow-sm'
                : 'bg-white text-[#564242] hover:bg-[#f3f4f6] border border-[#dcc0c0]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">calculate</span>
            Calculadora de Riesgo & Carga Proviral
          </button>
          <button
            onClick={() => setActiveTab('embeds')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13.5px] transition-all cursor-pointer ${
              activeTab === 'embeds'
                ? 'bg-[#5b0617] text-white shadow-sm'
                : 'bg-white text-[#564242] hover:bg-[#f3f4f6] border border-[#dcc0c0]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
            Visor 3D Rotable & Formularios
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13.5px] transition-all cursor-pointer ${
              activeTab === 'downloads'
                ? 'bg-[#5b0617] text-white shadow-sm'
                : 'bg-white text-[#564242] hover:bg-[#f3f4f6] border border-[#dcc0c0]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
            Guías & Documentación
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* PESTAÑA 1: VIDEOS INTERACTIVOS & YOUTUBE CON PREGUNTAS */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'interactive-videos' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reproductor Interactivo Principal */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative bg-slate-950 rounded-2xl overflow-hidden aspect-video border border-slate-800 shadow-lg flex flex-col justify-between p-4 text-white">
                {/* Visualizador de Video: YouTube Embed o Simulador Nativo */}
                {selectedVideo.isYoutube ? (
                  <div className="absolute inset-0 z-0">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=0&rel=0`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={selectedVideo.thumbnail}
                      alt={selectedVideo.title}
                      className="w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                )}

                {/* Banner Superior del Reproductor */}
                <div className="relative z-10 flex justify-between items-center text-xs pointer-events-none">
                  <span className="bg-[#5b0617]/90 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                    {selectedVideo.category}
                  </span>
                  <button
                    onClick={() => {
                      if (selectedVideo.checkpoints.length > 0) {
                        setActiveCheckpoint(selectedVideo.checkpoints[0]);
                        setSelectedOption(null);
                        setQuizFeedback(null);
                      }
                    }}
                    className="pointer-events-auto bg-black/80 hover:bg-[#5b0617] px-3 py-1 rounded-md text-[11px] font-bold text-white transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">quiz</span>
                    Abrir Quiz de Autoevaluación
                  </button>
                </div>

                {/* Modal de Pregunta Interactiva Superpuesta con Scroll y Botón de Cerrar */}
                {activeCheckpoint && (
                  <div className="absolute inset-0 z-30 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white text-[#191c1e] p-6 rounded-xl shadow-2xl border-2 border-[#5b0617] max-w-lg w-full max-h-[85vh] overflow-y-auto relative animate-scaleUp">
                      {/* Botón de Cerrar Modal */}
                      <button
                        onClick={handleDismissModal}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 hover:bg-[#ffdada] text-[#564242] hover:text-[#5b0617] flex items-center justify-center transition-all cursor-pointer"
                        title="Cerrar / Omitir evaluación"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>

                      <div className="flex items-center gap-2 text-[#5b0617] font-bold text-[12px] uppercase mb-2">
                        <span className="material-symbols-outlined text-[18px]">help</span>
                        Evaluación Biomédica Interactiva ({activeCheckpoint.timeLabel})
                      </div>

                      <h3 className="font-bold text-[15px] mb-4 text-[#191c1e] pr-6">
                        {activeCheckpoint.question}
                      </h3>

                      <div className="space-y-2 mb-4">
                        {activeCheckpoint.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedOption(i)}
                            className={`w-full text-left p-3 rounded-lg border text-[13px] transition-all cursor-pointer ${
                              selectedOption === i
                                ? 'border-[#5b0617] bg-[#ffdada]/50 font-semibold text-[#5b0617]'
                                : 'border-[#dcc0c0] hover:bg-slate-50 text-[#564242]'
                            }`}
                          >
                            <span className="inline-block w-5 font-bold">{String.fromCharCode(65 + i)}.</span> {opt}
                          </button>
                        ))}
                      </div>

                      {quizFeedback ? (
                        <div className="space-y-3">
                          <div
                            className={`p-3 rounded-lg text-[12px] font-medium ${
                              quizFeedback.correct
                                ? 'bg-green-100 text-green-900 border border-green-300'
                                : 'bg-red-100 text-red-900 border border-red-300'
                            }`}
                          >
                            <strong>{quizFeedback.correct ? '✓ ¡Respuesta Correcta (+50 pts)!' : '✗ Respuesta Incorrecta.'}</strong>{' '}
                            {quizFeedback.explanation}
                          </div>
                          <div className="flex gap-2">
                            {!quizFeedback.correct && (
                              <button
                                onClick={() => {
                                  setSelectedOption(null);
                                  setQuizFeedback(null);
                                }}
                                className="flex-1 bg-slate-200 text-[#191c1e] py-2.5 rounded-lg font-bold text-[12px] hover:bg-slate-300 transition-all cursor-pointer"
                              >
                                Reintentar Pregunta
                              </button>
                            )}
                            <button
                              onClick={handleContinuePlayback}
                              className="flex-1 bg-[#5b0617] text-white py-2.5 rounded-lg font-bold text-[12px] hover:opacity-90 transition-all cursor-pointer"
                            >
                              Continuar Video ▶
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={handleDismissModal}
                            className="px-4 py-2.5 bg-slate-100 text-[#564242] hover:bg-slate-200 rounded-lg text-[12px] font-bold transition-all cursor-pointer"
                          >
                            Cerrar
                          </button>
                          <button
                            onClick={handleOptionSubmit}
                            disabled={selectedOption === null}
                            className="flex-1 bg-[#5b0617] text-white py-2.5 rounded-lg font-bold text-[13px] hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
                          >
                            Validar Respuesta
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Controles de Reproducción Inferiores (Solo para videos interactivos nativos) */}
                {!selectedVideo.isYoutube && (
                  <div className="relative z-10 space-y-2">
                    <div className="relative w-full h-2 bg-white/30 rounded-full overflow-visible cursor-pointer">
                      <div
                        className="h-full bg-[#5b0617] rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                      {selectedVideo.checkpoints.map((cp, idx) => (
                        <div
                          key={idx}
                          style={{ left: `${cp.timePercent}%` }}
                          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white -translate-x-1/2 flex items-center justify-center text-[8px] font-bold ${
                            completedCheckpoints[`${selectedVideo.id}-${cp.timePercent}`]
                              ? 'bg-green-500 text-white'
                              : 'bg-amber-400 text-black'
                          }`}
                          title={`Pregunta a los ${cp.timeLabel}`}
                        >
                          ?
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-all cursor-pointer font-bold"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            {isPlaying ? 'pause' : 'play_arrow'}
                          </span>
                        </button>
                        <span className="font-mono text-[11px]">
                          {Math.floor(progress / 20)}:{(progress % 20) * 3 < 10 ? '0' : ''}
                          {(progress % 20) * 3} / {selectedVideo.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-white/80">
                        <span className="material-symbols-outlined text-[16px]">quiz</span>
                        {selectedVideo.checkpoints.length} Evaluaciones en tiempo real
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h2 className="font-bold text-[20px] text-[#5b0617]">{selectedVideo.title}</h2>
                <p className="text-[13.5px] text-[#564242] mt-1 leading-relaxed">{selectedVideo.desc}</p>
              </div>
            </div>

            {/* Lista de Videos & YouTube Disponibles */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#5b0617]">
                Videoteca & Módulos Disponibles
              </h3>
              <div className="space-y-3">
                {videoLessons.map((v) => {
                  const isCurrent = v.id === selectedVideo.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => {
                        setSelectedVideo(v);
                        setProgress(0);
                        setIsPlaying(false);
                        setActiveCheckpoint(null);
                      }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'border-[#5b0617] bg-[#ffdada]/30 shadow-xs'
                          : 'border-[#dcc0c0] bg-white hover:bg-[#f8f9fb]'
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-14 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0 relative">
                          <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1 rounded font-mono">
                            {v.duration}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-[13px] text-[#191c1e] line-clamp-2 leading-tight">
                            {v.title}
                          </h4>
                          <span className="inline-flex items-center gap-1 text-[11px] text-[#5b0617] font-semibold mt-1">
                            <span className="material-symbols-outlined text-[14px]">
                              {v.isYoutube ? 'smart_display' : 'quiz'}
                            </span>
                            {v.isYoutube ? 'Video YouTube HD' : `${v.checkpoints.length} Quizzes`}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 bg-white border border-[#dcc0c0] rounded-xl space-y-2">
                <span className="material-symbols-outlined text-[#5b0617] text-[24px]">school</span>
                <h4 className="font-bold text-[13px] text-[#191c1e]">Capacitación para Equipos de Salud</h4>
                <p className="text-[11.5px] text-[#564242]">
                  Recursos diseñados para virólogos, infectólogos, neurólogos y personal asistencial en zonas de prevalencia.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* PESTAÑA 2: CALCULADORA DE RIESGO CLÍNICO Y CARGA PROVIRAL */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'calculators' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-white border border-[#dcc0c0] rounded-2xl p-6 md:p-8 shadow-xs">
            <div className="max-w-2xl mb-8">
              <span className="inline-block px-3 py-0.5 bg-[#ffdada] text-[#5b0617] text-[11px] uppercase font-bold rounded-full mb-2">
                Herramienta de Apoyo Clínico
              </span>
              <h2 className="font-headline-lg text-[22px] md:text-[24px] text-[#5b0617] font-bold">
                Calculador de Proyección de Carga Proviral & Riesgo de Progresión
              </h2>
              <p className="text-[13px] text-[#564242] mt-1 leading-relaxed">
                Herramienta referencial basada en modelos predictivos del Instituto Alexander von Humboldt (UPCH) para estimar el riesgo relativo de evolución sintomática (HAM/TSP o ATL).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Controles de Parámetros */}
              <div className="lg:col-span-7 space-y-6">
                {/* Parámetro 1: Carga Proviral */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[13.5px] font-bold text-[#191c1e]">
                      Carga Proviral en PBMC (copias por cada 100 células):
                    </label>
                    <span className="px-2.5 py-1 bg-[#ffdada] text-[#5b0617] font-mono font-bold text-[13px] rounded-lg">
                      {proviralLoad.toFixed(1)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="20"
                    step="0.1"
                    value={proviralLoad}
                    onChange={(e) => setProviralLoad(parseFloat(e.target.value))}
                    className="w-full accent-[#5b0617] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#897172]">
                    <span>0.1% (Baja replicación)</span>
                    <span>4.0% (Umbral de alerta)</span>
                    <span>20.0% (Alta replicación)</span>
                  </div>
                </div>

                {/* Parámetro 2: Tiempo estimado de infección */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[13.5px] font-bold text-[#191c1e]">
                      Tiempo Estimado de Infección (Años):
                    </label>
                    <span className="px-2.5 py-1 bg-[#d6e0f3] text-[#1d2b3a] font-mono font-bold text-[13px] rounded-lg">
                      {infectionDuration} años
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={infectionDuration}
                    onChange={(e) => setInfectionDuration(parseInt(e.target.value))}
                    className="w-full accent-[#5b0617] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#897172]">
                    <span>1 año</span>
                    <span>20 años</span>
                    <span>40+ años</span>
                  </div>
                </div>

                {/* Parámetro 3: Signos clínicos concurrentes */}
                <div className="space-y-3 pt-2 border-t border-[#dcc0c0]/60">
                  <label className="text-[13.5px] font-bold text-[#191c1e] block">
                    Manifestaciones Clínicas o Signos Detectados:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label className="flex items-center gap-2 p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg cursor-pointer text-[12.5px]">
                      <input
                        type="checkbox"
                        checked={symptoms.spasticity}
                        onChange={(e) => setSymptoms({ ...symptoms, spasticity: e.target.checked })}
                        className="accent-[#5b0617] w-4 h-4"
                      />
                      <span>Rigidez / Marcha Espástica</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg cursor-pointer text-[12.5px]">
                      <input
                        type="checkbox"
                        checked={symptoms.urinary}
                        onChange={(e) => setSymptoms({ ...symptoms, urinary: e.target.checked })}
                        className="accent-[#5b0617] w-4 h-4"
                      />
                      <span>Vejiga Neurogénica / Urgencia</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg cursor-pointer text-[12.5px]">
                      <input
                        type="checkbox"
                        checked={symptoms.uveitis}
                        onChange={(e) => setSymptoms({ ...symptoms, uveitis: e.target.checked })}
                        className="accent-[#5b0617] w-4 h-4"
                      />
                      <span>Uveítis Crónica / Visión Borrosa</span>
                    </label>
                    <label className="flex items-center gap-2 p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg cursor-pointer text-[12.5px]">
                      <input
                        type="checkbox"
                        checked={symptoms.dermatitis}
                        onChange={(e) => setSymptoms({ ...symptoms, dermatitis: e.target.checked })}
                        className="accent-[#5b0617] w-4 h-4"
                      />
                      <span>Dermatitis Infecciosa Recidivante</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Panel de Resultados del Score */}
              <div className="lg:col-span-5 bg-[#f8f9fb] border-2 border-[#dcc0c0] p-6 rounded-2xl flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-[12px] uppercase font-bold text-[#897172] tracking-wider mb-2">
                    Nivel de Riesgo Calculado
                  </h3>
                  <div className={`p-4 rounded-xl border text-center font-bold text-[18px] mb-3 ${riskResult.color}`}>
                    {riskResult.tier}
                  </div>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-[12.5px]">
                      <span className="text-[#564242]">Índice de Progresión:</span>
                      <strong className="text-[#5b0617]">{riskResult.score} / 100 pts</strong>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#5b0617] transition-all duration-500"
                        style={{ width: `${riskResult.score}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#dcc0c0] text-[12px] text-[#564242] leading-relaxed">
                    <strong className="block text-[#191c1e] mb-1">Recomendación de Consenso:</strong>
                    {riskResult.recommendation}
                  </div>
                </div>

                <div className="text-[10px] text-[#897172] pt-2 border-t border-[#dcc0c0]/60">
                  * Herramienta con fines educativos y de orientación biomédica. No sustituye la evaluación clínica presencial de infectología o neurología.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* PESTAÑA 3: MODELO 3D ROTABLE CON MOUSE & FORMULARIOS */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'embeds' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Visor Macromolecular 3D Interactivo con Mouse Drag */}
            <div className="lg:col-span-6 bg-white border border-[#dcc0c0] p-6 rounded-2xl space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10.5px] uppercase font-bold text-[#5b0617] tracking-wider block">
                    Visor Macromolecular 3D
                  </span>
                  <h3 className="font-bold text-[16px] text-[#191c1e]">
                    Estructura 3D Manipulable (Arrastra con el Mouse)
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className="px-2.5 py-1 bg-[#f3f4f6] text-[#5b0617] text-[11px] font-bold rounded-lg border border-[#dcc0c0] hover:bg-[#ffdada] transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {isAutoRotating ? 'pause' : 'play_arrow'}
                    </span>
                    {isAutoRotating ? 'Pausar' : 'Girar'}
                  </button>
                  <button
                    onClick={() => {
                      rotXRef.current = 0.35;
                      rotYRef.current = 0.45;
                      setZoom(1);
                    }}
                    className="p-1 bg-[#f3f4f6] text-[#564242] text-[11px] rounded-lg border border-[#dcc0c0] hover:bg-slate-200 transition-all cursor-pointer"
                    title="Resetear ángulo 3D"
                  >
                    <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                  </button>
                  <button
                    onClick={() => setZoom((z) => Math.min(z + 0.15, 1.6))}
                    className="px-2 py-1 bg-[#f3f4f6] text-[#564242] text-[11px] font-bold rounded-lg border border-[#dcc0c0] hover:bg-slate-200 transition-all cursor-pointer"
                    title="Zoom in"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoom((z) => Math.max(z - 0.15, 0.6))}
                    className="px-2 py-1 bg-[#f3f4f6] text-[#564242] text-[11px] font-bold rounded-lg border border-[#dcc0c0] hover:bg-slate-200 transition-all cursor-pointer"
                    title="Zoom out"
                  >
                    -
                  </button>
                </div>
              </div>

              {/* Selector de Modelos Moleculares */}
              <div className="flex gap-2">
                <button
                  onClick={() => setModelType('virion')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    modelType === 'virion'
                      ? 'bg-[#5b0617] text-white'
                      : 'bg-slate-100 text-[#564242] hover:bg-slate-200'
                  }`}
                >
                  Virión Completo (Cápside + gp46)
                </button>
                <button
                  onClick={() => setModelType('tax')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    modelType === 'tax'
                      ? 'bg-[#5b0617] text-white'
                      : 'bg-slate-100 text-[#564242] hover:bg-slate-200'
                  }`}
                >
                  Proteína Tax (Hélice 3D)
                </button>
              </div>

              {/* Área del Canvas con interactividad de arrastre */}
              <div
                className="relative w-full aspect-square max-h-[300px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <canvas ref={canvasRef} width={340} height={300} className="w-full h-full pointer-events-none" />
                <div className="absolute top-2 left-2 text-[9.5px] text-slate-400 bg-black/60 px-2 py-0.5 rounded pointer-events-none">
                  🖱️ Haz clic y arrastra en cualquier dirección para rotar en 360°
                </div>
                <div className="absolute bottom-2 right-2 text-[9.5px] text-white/80 bg-[#5b0617]/80 px-2 py-0.5 rounded pointer-events-none font-mono">
                  Motor 3D Interactivo
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a
                  href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=11908"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg text-center font-bold text-[#5b0617] hover:bg-[#ffdada] transition-all"
                >
                  NCBI Taxonomy (HTLV-1) ↗
                </a>
                <a
                  href="https://www.rcsb.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg text-center font-bold text-[#555f6f] hover:bg-[#d6e0f3] transition-all"
                >
                  Protein Data Bank (PDB) ↗
                </a>
              </div>
            </div>

            {/* Formulario Referencial de Registro Epidemiológico */}
            <div className="lg:col-span-6 bg-white border border-[#dcc0c0] p-6 rounded-2xl space-y-4 shadow-xs">
              <div>
                <span className="text-[10.5px] uppercase font-bold text-[#5b0617] tracking-wider block">
                  Formulario Referencial
                </span>
                <h3 className="font-bold text-[16px] text-[#191c1e]">
                  Notificación & Registro de Datos Clínicos
                </h3>
                <p className="text-[11.5px] text-[#564242]">
                  Módulo interactivo para el registro y clasificación estadística anónima de casos dentro de la red.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3 animate-fadeIn">
                  <span className="material-symbols-outlined text-green-600 text-[36px]">task_alt</span>
                  <h4 className="font-bold text-[14px] text-green-900">Registro Clínico Notificado con Éxito</h4>
                  <p className="text-[12px] text-green-800">
                    Los datos anonimizados han sido validados para los reportes estadísticos de la red RIII-HTLV.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-green-700 text-white rounded-lg text-[12px] font-bold hover:bg-green-800 transition-all cursor-pointer"
                  >
                    Ingresar Otro Registro
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 text-[12px]">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-[#191c1e] block mb-1">Rango de Edad:</label>
                      <select
                        value={formData.ageRange}
                        onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                        className="w-full p-2 border border-[#dcc0c0] rounded-lg bg-white"
                      >
                        <option value="<18">&lt; 18 años</option>
                        <option value="18-29">18 - 29 años</option>
                        <option value="30-49">30 - 49 años</option>
                        <option value="50-69">50 - 69 años</option>
                        <option value=">70">&gt; 70 años</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-[#191c1e] block mb-1">Región de Diagnóstico:</label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full p-2 border border-[#dcc0c0] rounded-lg bg-white"
                      >
                        <option value="Lima / Callao">Lima / Callao</option>
                        <option value="Sierra Sur (Cusco/Puno/Ayacucho)">Sierra Sur</option>
                        <option value="Selva / Amazonía">Selva / Amazonía</option>
                        <option value="Norte Costero">Norte Costero</option>
                        <option value="Internacional">Internacional (Brasil/Japón/Caribe)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-[#191c1e] block mb-1">Serotipo Detectado:</label>
                      <select
                        value={formData.serologyType}
                        onChange={(e) => setFormData({ ...formData, serologyType: e.target.value })}
                        className="w-full p-2 border border-[#dcc0c0] rounded-lg bg-white"
                      >
                        <option value="HTLV-1">HTLV-1 Confirmado</option>
                        <option value="HTLV-2">HTLV-2 Confirmado</option>
                        <option value="HTLV-1/2 Indeterminado">Serología Indeterminada</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-[#191c1e] block mb-1">Estado Clínico:</label>
                      <select
                        value={formData.clinicalState}
                        onChange={(e) => setFormData({ ...formData, clinicalState: e.target.value })}
                        className="w-full p-2 border border-[#dcc0c0] rounded-lg bg-white"
                      >
                        <option value="Asintomático">Portador Asintomático</option>
                        <option value="HAM/TSP">HAM/TSP (Paraparesia)</option>
                        <option value="ATL">Leucemia/Linfoma ATL</option>
                        <option value="Uveítis/Dermatitis">Uveítis / Dermatitis</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#f8f9fb] border border-[#dcc0c0] rounded-lg">
                    <label className="flex items-start gap-2 cursor-pointer text-[11px] text-[#564242]">
                      <input
                        type="checkbox"
                        checked={formData.consentGranted}
                        onChange={(e) => setFormData({ ...formData, consentGranted: e.target.checked })}
                        className="accent-[#5b0617] mt-0.5"
                        required
                      />
                      <span>
                        Declaro que los datos son anónimos y consiento su uso estadístico conforme a la <strong>Ley N° 29733 de Protección de Datos Personales</strong>.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#5b0617] text-white py-2.5 rounded-lg font-bold hover:opacity-90 transition-all cursor-pointer"
                  >
                    Enviar Registro Estadístico Referencial
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* PESTAÑA 4: GUÍAS, DOCUMENTOS & INFOGRAFÍAS DESCARGABLES */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'downloads' && (
        <section className="space-y-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#564242]">search</span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#dcc0c0] bg-white text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#5b0617]/20"
                placeholder="Buscar guías, infografías o manuales de laboratorio..."
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadableResources
              .filter((r) => r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.desc.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((res, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#dcc0c0] overflow-hidden flex flex-col group transition-all hover:shadow-lg">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={res.title} src={res.image} />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-white/90 text-[#5b0617] font-bold text-[10.5px] px-2.5 py-0.5 rounded border border-[#5b0617]/20">
                        {res.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="font-bold text-[13.5px] text-[#191c1e] mb-1.5 leading-snug group-hover:text-[#5b0617] transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-[11.5px] text-[#564242] mb-3 flex-grow leading-relaxed">
                      {res.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#dcc0c0]/40">
                      <span className="text-[11px] text-[#897172] font-mono">{res.meta}</span>
                      <a
                        href="/about"
                        className="flex items-center gap-1 text-[11.5px] font-bold text-[#5b0617] hover:underline"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span> Descargar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </main>
  );
}