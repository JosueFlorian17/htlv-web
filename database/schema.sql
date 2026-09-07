-- Extensiones necesarias (para generar IDs únicos UUID si lo deseas, o usamos serial)
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) DEFAULT 'user', -- 'user', 'admin', 'moderator'
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS noticias (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    contenido TEXT NOT NULL,
    imagen_url VARCHAR(255),
    autor_id INT REFERENCES usuarios(id) ON DELETE SET NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS foro_categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT,
    slug VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS foro_posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    categoria_id INT REFERENCES foro_categorias(id) ON DELETE CASCADE,
    autor_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS foro_comentarios (
    id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    post_id INT REFERENCES foro_posts(id) ON DELETE CASCADE,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    parent_id INT REFERENCES foro_comentarios(id) ON DELETE CASCADE, -- Para hilos de comentarios (respuestas)
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);