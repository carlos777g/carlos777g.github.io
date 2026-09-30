# carworks.dev

Frontend del sitio personal de Carlos Guillén: una presentación profesional con información sobre mí, proyectos, habilidades técnicas y artículos sobre desarrollo de software.

Este repositorio contiene únicamente la aplicación cliente, ubicada en `client/`. El contenido dinámico de proyectos y blog lo proporciona un backend independiente mediante una API HTTP.

## Funcionalidades

- Página principal con presentación, información personal, stack tecnológico y datos de contacto.
- Listado y detalle de proyectos.
- Listado de artículos y páginas individuales del blog mediante slug.
- Renderizado de artículos en Markdown, con soporte para GitHub Flavored Markdown, resaltado de sintaxis y diagramas Mermaid.
- Tema visual dinámico con paletas de acento y favicon asociado.
- Enrutado SPA con páginas de inicio, proyectos, blog, detalle de artículo y página no encontrada.

## Stack

- React 19 y Vite 7.
- JavaScript y JSX, sin TypeScript.
- Tailwind CSS v4 mediante `@tailwindcss/vite`.
- React Router v7.
- `react-markdown`, `remark-gfm`, `react-syntax-highlighter` y Mermaid.
- pnpm como gestor de paquetes.

## Requisitos

- Node.js 20 o superior.
- pnpm 9 o superior.
- Una instancia disponible del backend para cargar proyectos y artículos.

## Desarrollo local

Todos los comandos se ejecutan desde `client/`:

```bash
cd client
pnpm install
pnpm dev
```

Otros comandos disponibles:

```bash
pnpm build       # Genera dist/ y copia index.html como 404.html
pnpm lint        # Ejecuta ESLint
pnpm preview     # Previsualiza el build de producción
```

### Variables de entorno

Copia `client/.env.example` como `client/.env` y configura la URL base del backend:

```bash
VITE_API_URL=http://localhost:3000
```

La aplicación utiliza esta variable para consultar:

- `GET ${VITE_API_URL}/api/projects`
- `GET ${VITE_API_URL}/api/blog/posts`
- `GET ${VITE_API_URL}/api/blog/posts/:slug`

Las respuestas de proyectos y artículos se normalizan en sus respectivas entidades antes de llegar a los componentes. Las consultas se guardan en la caché local del navegador para evitar peticiones repetidas.

## Estructura del proyecto

El código sigue una organización basada en Feature-Sliced Design. Las capas deben importar únicamente desde capas inferiores:

```text
app → processes → pages → widgets → features → entities → shared
```

```text
client/
├── public/                 # Archivos estáticos, como CNAME y favicon
└── src/
    ├── app/                # Composición de la aplicación, router y estilos globales
    ├── pages/              # Páginas asociadas a rutas
    ├── widgets/            # Bloques de interfaz compuestos
    ├── features/           # Funcionalidades aisladas, como el cambio de tema
    ├── entities/           # Modelos y acceso a datos de proyectos y artículos
    └── shared/             # UI, hooks, utilidades, datos y recursos reutilizables
```

El alias `@` apunta a `client/src/`. Se recomienda utilizarlo en los imports, por ejemplo:

```js
import { getPosts } from "@/entities/post"
```

Las entidades exponen su API pública desde `index.js`. El acceso a la API se encuentra en `entities/project/api/` y `entities/post/api/`, mientras que la transformación de respuestas se realiza en sus respectivos directorios `model/`.

## Despliegue

El workflow `.github/workflows/deploy.yml` construye el frontend y lo publica en GitHub Pages cada vez que hay un push a `main`.

Durante el build de GitHub Actions, `VITE_API_URL` se obtiene del secret con el mismo nombre. Para que el despliegue funcione, configura ese secret con la URL pública del backend.

El comando de build genera `client/dist/` y duplica `index.html` como `404.html`, lo que permite que GitHub Pages resuelva correctamente las rutas profundas de la SPA, como `/projects` o `/blog/un-articulo`.
