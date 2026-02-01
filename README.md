# 🌐 Mi Web Personal - Fullstack Developer & Telematics Engineer

Este proyecto es mi **portafolio personal** como desarrollador web fullstack y telemático.  
Incluye secciones de **sobre mí**, **portafolio**, **blog** y **contacto**, con un diseño moderno, animaciones y arquitectura limpia.

---

## 🛠️ Tecnologías
- **Frontend**: React (con Vite o Next.js), TailwindCSS para estilos, animaciones con Framer Motion y partículas con tsParticles.
- **Backend**: Node.js con Express.
- **Base de Datos**: PostgreSQL.
- **Infraestructura**: Servidor propio (Linux).

---

## 📂 Estructura del proyecto

```bash
mi-web-personal/
│
├── client/                 # Frontend (React)
│   ├── public/             # Archivos estáticos
│   ├── src/                # Código fuente
│   │   ├── components/     # Componentes UI reutilizables
│   │   ├── pages/          # Páginas principales (Home, Sobre mí, Blog, Contacto)
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utilidades
│   │   ├── styles/         # Estilos globales (Tailwind)
│   │   └── App.jsx         # Punto de entrada principal
│   └── package.json
│
├── server/                 # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/         # Configuración (db, env, middlewares)
│   │   ├── controllers/    # Lógica de cada endpoint
│   │   ├── models/         # Modelos de base de datos (Sequelize / Prisma / Knex)
│   │   ├── routes/         # Definición de rutas
│   │   ├── services/       # Lógica de negocio
│   │   └── index.js        # Servidor Express
│   └── package.json
│
├── database/               # Scripts SQL, migraciones, seeds
│
├── .gitignore
├── README.md
└── package.json            # Configuración del monorepo (opcional con workspaces)
