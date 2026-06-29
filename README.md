# 🌐 carworks.dev — Portafolio personal & Blog

Frontend de mi web personal como desarrollador fullstack e ingeniero telemático: portafolio, secciones "sobre mí" y blog técnico, con diseño moderno, animaciones y un sistema de tema dinámico.

> Este repositorio contiene **únicamente el frontend** (carpeta `client/`). El backend que sirve el blog es un servicio aparte que se consume por HTTP mediante la variable `VITE_API_URL`.

---

## 🛠️ Stack

- **React 19** + **Vite 7** (SPA, JavaScript + JSX, sin TypeScript)
- **Tailwind CSS v4** vía el plugin `@tailwindcss/vite` (tokens de diseño definidos con `@theme` en CSS)
- **React Router v7** para el enrutado del lado del cliente
- **react-markdown** + **remark-gfm**, **react-syntax-highlighter** y **mermaid** para renderizar los posts del blog
- **pnpm** como gestor de paquetes

Despliegue: **GitHub Pages** (dominio personalizado `carworks.dev`).

---

## 🚀 Desarrollo

Todos los comandos se ejecutan dentro de `client/`.

```bash
cd client
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo (Vite)
pnpm build        # build de producción (genera dist/ y copia index.html -> 404.html)
pnpm lint         # ESLint
pnpm preview      # previsualizar el build de producción
```

### Variables de entorno

Copia `client/.env.example` a `client/.env` y define la URL del backend:

```bash
VITE_API_URL=https://tu-api.ejemplo
```

---

## 📂 Estructura del proyecto

El código sigue **Feature-Sliced Design (FSD)**. Cada capa solo puede importar de las capas inferiores:

```
app → processes → pages → widgets → features → entities → shared
```

```bash
client/
├── public/                 # Estáticos (CNAME, favicon/symbol)
└── src/
    ├── app/                # Raíz de composición: App, router, estilos globales y tema
    ├── pages/              # Componentes de ruta: home, blog, post, not-found
    ├── widgets/            # Bloques de UI compuestos (hero, footer, navbars, projects…)
    ├── features/           # Funcionalidades (p. ej. theme-switch)
    ├── entities/           # Modelos de dominio + acceso a datos (entities/post)
    └── shared/             # Primitivos reutilizables: ui/, lib/ (hooks, theme), data/, assets/
```

- **Alias de importación:** `@` apunta a `src/` (configurado en `vite.config.js` y `jsconfig.json`). Usa siempre `@/...`.
- Cada *slice* expone su API pública con un barrel `index.js` y mantiene su componente en `ui.jsx`.

### Capa de datos del blog (`entities/post`)

`api/` obtiene los posts desde `${VITE_API_URL}/api/blog/posts` (y `/:slug`), y cada respuesta cruda se normaliza con la factoría `createPost` (`model/`). Los componentes consumen siempre esta forma normalizada, nunca el JSON crudo de la API.

### Sistema de tema dinámico

En cada carga se elige una paleta de acento al azar (`shared/lib/theme/random-theme.js`), que fija la variable CSS `--accent-color`, evita repetir el último tema vía `sessionStorage` y emite un evento `theme-changed`. El favicon se actualiza según el color elegido.

---

## 📦 Despliegue

El workflow `.github/workflows/deploy.yml` construye `client/` y publica `dist/` en GitHub Pages en cada push a `main`. `VITE_API_URL` se inyecta desde los *secrets* del repositorio durante el build. Como el enrutado es del lado del cliente, el build duplica `index.html` como `404.html` para que los enlaces profundos (p. ej. `/blog/:slug`) resuelvan correctamente.
