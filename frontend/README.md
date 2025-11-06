# Frontend - Plataforma de Reventa de Entradas

Frontend de la plataforma de reventa de entradas con sistema de escrow.

## Stack Tecnológico

- **React 18** con TypeScript
- **Vite** como build tool
- **React Router Dom** para el routing
- **Tailwind CSS** para estilos
- **React Hook Form** + **Zod** para formularios y validación
- **Axios** para peticiones HTTP

## Estructura de Carpetas

```
src/
├── components/      # Componentes reutilizables
├── pages/          # Páginas de la aplicación
├── services/       # Servicios de API
├── hooks/          # Custom hooks
├── context/        # Context providers
├── utils/          # Utilidades y helpers
├── types/          # Tipos de TypeScript
├── assets/         # Recursos estáticos
├── App.tsx         # Componente principal
├── main.tsx        # Punto de entrada
└── index.css       # Estilos globales
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env` en la raíz del frontend (basado en `.env.example`):
```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Scripts Disponibles

```bash
# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Linting
npm run lint
```

## Desarrollo

El servidor de desarrollo se ejecuta en `http://localhost:3000` por defecto.

Las peticiones a `/api/*` se proxean automáticamente al backend en `http://localhost:5000`.

## Configuración de Path Aliases

El proyecto está configurado con path aliases:
- `@/*` apunta a `src/*`

Ejemplo:
```typescript
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'
```

## Tailwind CSS

El proyecto usa Tailwind CSS con una paleta de colores primary personalizada. Los estilos se configuran en:
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - Configuración de PostCSS
- `src/index.css` - Directivas de Tailwind y estilos globales
