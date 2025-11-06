# Backend - Plataforma de Reventa de Entradas

API REST del backend para la plataforma de reventa de entradas con sistema de escrow.

## Stack Tecnológico

- **Node.js** con **TypeScript**
- **Express** como framework web
- **Prisma** como ORM
- **PostgreSQL** como base de datos
- **Stripe** para procesamiento de pagos
- **JWT** para autenticación
- **bcrypt** para hash de contraseñas

## Estructura de Carpetas

```
src/
├── routes/         # Rutas de la API
├── controllers/    # Controladores
├── services/       # Lógica de negocio
├── models/         # Modelos adicionales (si necesario)
├── middleware/     # Middlewares personalizados
├── types/          # Tipos de TypeScript
├── utils/          # Utilidades y helpers
├── app.ts          # Configuración de Express
└── index.ts        # Punto de entrada

prisma/
└── schema.prisma   # Schema de base de datos
```

## Modelos de Base de Datos

### User
- Gestión de usuarios (compradores y vendedores)
- Autenticación con email y password
- Integración con Stripe Customer ID

### Ticket
- Entradas disponibles para la venta
- Estados: AVAILABLE, IN_ESCROW, SOLD, CANCELLED, EXPIRED
- Información completa del evento

### Transaction
- Gestión del sistema de escrow
- Estados: PENDING, PAYMENT_RECEIVED, IN_ESCROW, COMPLETED, CANCELLED, REFUNDED, DISPUTED
- Integración con Stripe Payment Intents

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env` en la raíz del backend (basado en `.env.example`):
```env
NODE_ENV=development
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/plataforma_reventa?schema=public"
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
FRONTEND_URL=http://localhost:3000
```

3. Iniciar PostgreSQL con Docker:
```bash
# Desde la raíz del proyecto
docker-compose up -d
```

4. Generar cliente de Prisma:
```bash
npm run prisma:generate
```

5. Ejecutar migraciones:
```bash
npm run prisma:migrate
```

## Scripts Disponibles

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint

# Prisma
npm run prisma:generate    # Generar cliente Prisma
npm run prisma:migrate     # Ejecutar migraciones
npm run prisma:studio      # Abrir Prisma Studio
```

## API Endpoints

### Health Check
- `GET /health` - Verificar estado del servidor

### Rutas Planeadas
- `/api/auth/*` - Autenticación y registro
- `/api/tickets/*` - Gestión de entradas
- `/api/transactions/*` - Gestión de transacciones/escrow
- `/api/users/*` - Gestión de usuarios
- `/api/stripe/*` - Webhooks de Stripe

## Desarrollo

El servidor se ejecuta en `http://localhost:5000` por defecto.

## Sistema de Escrow

El sistema de escrow funciona de la siguiente manera:

1. **Comprador inicia transacción**: Se crea un Payment Intent en Stripe
2. **Pago recibido**: Los fondos se mantienen en escrow
3. **Verificación**: Período de verificación para confirmar la validez de las entradas
4. **Liberación**: Los fondos se transfieren al vendedor (menos comisión de plataforma)
5. **Disputa**: Sistema para manejar problemas y reembolsos

## Base de Datos

Para visualizar y editar la base de datos en una interfaz gráfica:
```bash
npm run prisma:studio
```

Esto abrirá Prisma Studio en `http://localhost:5555`
