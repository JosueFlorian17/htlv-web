import os

# Definir la estructura de carpetas y archivos base
ESTRUCTURA = {
    "frontend": {
        "src": {
            "app": {
                "(auth)": {"login": {}, "register": {}}, # Rutas de autenticación
                "noticias": {"[id]": {}},               # Detalle de noticia dinámica
                "foro": {"categorias": {}, "post": {"[id]": {}}}, # Estructura del foro
                "api": {},                              # Si usas Next.js como BFF (Backend-for-Frontend)
            },
            "components": {
                "ui": {},       # Botones, inputs, modales (reutilizables)
                "noticias": {}, # Tarjetas de noticias, layouts de prensa
                "foro": {},     # Hilos de discusión, caja de comentarios
                "layout": {}    # Navbar, Footer, Sidebar
            },
            "hooks": {},        # Hooks personalizados de React
            "lib": {},          # Clientes de API, utilidades de formato (fechas, etc.)
            "services": {},     # Funciones para llamar al backend externo
            "styles": {}        # Configuración global de CSS / Tailwind
        }
    },
    "backend": {
        "src": {
            "config": {},       # Variables de entorno y conexión a DB
            "controllers": {},  # Lógica de negocio (noticiasController, foroController)
            "models": {},       # Modelos u ORM (Prisma/Sequelize/Mongoose si aplica)
            "routes": {},       # Definición de endpoints (/api/noticias, /api/foro)
            "middlewares": {}, # Protección de rutas, validación de JWT
            "utils": {}         # Funciones de ayuda general
        }
    },
    "database": {
        "migrations": {},       # Archivos .sql para estructurar las tablas de PostgreSQL
        "seeds": {}             # Datos de prueba iniciales (noticias y categorías del foro)
    }
}

def crear_estructura(base_path, estructura_dict):
    for nombre, contenido in estructura_dict.items():
        ruta_actual = os.path.join(base_path, nombre)
        os.makedirs(ruta_actual, exist_ok=True)
        if isinstance(contenido, dict):
            crear_estructura(ruta_actual, contenido)

if __name__ == "__main__":
    # Obtener el directorio actual donde se ejecuta el script
    directorio_raiz = os.getcwd()
    
    print(" Creando estructura profesional de carpetas...")
    crear_estructura(directorio_raiz, ESTRUCTURA)
    
    # Crear archivos base esenciales vacíos para guiar el proyecto
    archivos_base = [
        "frontend/src/app/layout.js",
        "frontend/src/app/page.js",
        "frontend/.env.local",
        "backend/src/server.js",
        "backend/.env",
        "database/schema.sql",
        "README.md"
    ]
    
    for archivo in archivos_base:
        ruta_archivo = os.path.join(directorio_raiz, archivo)
        if not os.path.exists(ruta_archivo):
            with open(ruta_archivo, "w", encoding="utf-8") as f:
                if "schema.sql" in archivo:
                    f.write("-- Definición de tablas para PostgreSQL\n")
                elif "server.js" in archivo:
                    f.write("// Punto de entrada para el servidor Node.js (Express)\n")
                elif "README.md" in archivo:
                    f.write("# Portal de Noticias y Foro\n\nProyecto optimizado con Next.js, Node.js y PostgreSQL.")
            print(f" Archivo creado: {archivo}")

    print("\n ¡Estructura creada con éxito! Ya puedes abrir la carpeta en VS Code.")