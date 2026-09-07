import os

def mostrar_arbol(ruta_dir, prefijo=""):
    """
    Recorre las carpetas y archivos de forma recursiva 
    para dibujar una jerarquía visual.
    """
    # Archivos o carpetas que prefieras ignorar (como node_modules o archivos de sistema)
    ignorar = {".git", "node_modules", "__pycache__", ".next"}
    
    try:
        elementos = sorted(os.listdir(ruta_dir))
    except PermissionError:
        return

    # Filtrar elementos ignorados
    elementos = [e for e in elementos if e not in ignorar]
    
    for i, elemento in enumerate(elementos):
        ruta_completa = os.path.join(ruta_dir, elemento)
        es_ultimo = (i == len(elementos) - 1)
        
        # Símbolos gráficos para el árbol
        conector = "└── " if es_ultimo else "├── "
        print(f"{prefijo}{conector}{elemento}")
        
        # Si es una carpeta, se explora de forma recursiva
        if os.path.isdir(ruta_completa):
            siguiente_prefijo = prefijo + ("    " if es_ultimo else "│   ")
            mostrar_arbol(ruta_completa, siguiente_prefijo)

if __name__ == "__main__":
    print("\n Estructura actual de tu proyecto:")
    print("=" * 40)
    # "." indica el directorio actual donde se ejecuta el script
    mostrar_arbol(".") 
    print("=" * 40)