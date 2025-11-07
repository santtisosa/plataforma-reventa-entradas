# Plataforma de Reventa de Entradas

Marketplace seguro para la compraventa de entradas a eventos con sistema de pagos en garantía (escrow).

## Stack Tecnológico

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router Dom
- React Hook Form + Zod
- Axios

### Backend
- Node.js + TypeScript
- Express
- Prisma ORM
- SQLite (desarrollo) / PostgreSQL (producción futura)
- Stripe (pagos)
- JWT (autenticación)
- bcrypt

## Estructura del Proyecto

```
plataforma-reventa-entradas/
├── frontend/           # Aplicación React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── types/
│   │   └── assets/
│   ├── public/
│   └── package.json
│
├── backend/            # API REST
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── types/
│   │   └── utils/
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
├── docker-compose.yml  # PostgreSQL
└── README.md
```

## Instalación y Configuración

### Prerrequisitos

- Node.js 18+ y npm
- Cuenta de Stripe (modo prueba)

**Nota:** El proyecto usa SQLite para desarrollo local (no requiere Docker). Se migrará a PostgreSQL en producción.

### 1. Clonar el Repositorio

```bash
git clone <url-del-repo>
cd plataforma-reventa-entradas
```

### 2. Configurar Backend

```bash
cd backend

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Editar .env con tus valores
# - DATABASE_URL ya está configurado para SQLite (file:./dev.db)
# - Cambiar JWT_SECRET
# - Agregar tu STRIPE_SECRET_KEY
# - Agregar tu STRIPE_WEBHOOK_SECRET
```

Generar cliente y ejecutar migraciones de Prisma:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Esto creará la base de datos SQLite en `backend/dev.db`.

Iniciar servidor de desarrollo:

```bash
npm run dev
```

El backend estará disponible en `http://localhost:5000`

### 3. Configurar Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Crear archivo .env
echo "VITE_API_URL=http://localhost:5000" > .env
echo "VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key" >> .env
```

Iniciar servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

## Scripts Disponibles

### Backend

```bash
npm run dev              # Modo desarrollo (hot reload)
npm run build            # Build para producción
npm start                # Ejecutar en producción
npm run lint             # Linting
npm run prisma:generate  # Generar cliente Prisma
npm run prisma:migrate   # Ejecutar migraciones
npm run prisma:studio    # Abrir Prisma Studio
```

### Frontend

```bash
npm run dev      # Modo desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linting
```

## Modelos de Base de Datos

### User
Gestión de usuarios (compradores y vendedores) con autenticación e integración con Stripe.

### Ticket
Entradas disponibles para venta con información del evento y estados de disponibilidad.

### Transaction
Sistema de escrow para gestionar pagos seguros entre compradores y vendedores.

## Sistema de Escrow

1. El comprador inicia una transacción
2. Los fondos se retienen en Stripe (escrow)
3. El vendedor entrega las entradas
4. El comprador confirma la recepción
5. Los fondos se liberan al vendedor (menos comisión)

En caso de disputa, se puede iniciar un proceso de reembolso.

## 🚀 Funcionalidades

### Autenticación
-  Registro de usuarios
-  Inicio de sesión
-  Recuperación de contraseña
-  Verificación de email

### Gestión de Entradas
-  Publicar entradas en venta
-  Editar publicaciones
-  Eliminar publicaciones
-  Búsqueda y filtrado de entradas
-  Ver detalles de entrada

### Sistema de Pagos
-  Integración con procesador de pagos
-  Retención de fondos (escrow)
-  Liberación de pago al confirmar recibo
-  Sistema de reembolsos
-  Historial de transacciones

### Panel de Usuario
-  Ver mis publicaciones
-  Ver mis compras
-  Ver mis ventas
-  Gestionar perfil
-  Notificaciones

### Seguridad
-  Validación de formularios
-  Protección de rutas
-  Encriptación de datos sensibles
-  Prevención de fraude

## 🎯 Estado del Proyecto

En desarrollo activo.

## 📝 Notas

Proyecto de portafolio educativo. Los pagos están configurados en modo prueba.

## 📄 Licencia

MIT License

Copyright (c) 2025

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y archivos de documentación asociados (el "Software"), para utilizar el Software sin restricciones, incluyendo sin limitación los derechos de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y permitir a las personas a las que se les proporcione el Software hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o porciones sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, AGRAVIO O DE OTRO MODO, QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.