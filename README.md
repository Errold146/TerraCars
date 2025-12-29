# 🚗 TerraCars

[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-API-blue?logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)
[![Zustand](https://img.shields.io/badge/Zustand-State-black?logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)

**TerraCars** es una aplicación web de práctica para la renta de coches, desarrollada con tecnologías modernas del stack Next.js.

> ⚠️ **Nota Importante:** Este es un proyecto de práctica educativa. Todos los datos y funcionalidades son ficticios.
> 
> 🚫 **ADVERTENCIA DE SEGURIDAD:** Aunque la aplicación utiliza Stripe como pasarela de pagos REAL, NO ingreses información de tarjetas reales. Usa únicamente las tarjetas de prueba proporcionadas.
> 
> 🔐 **Rutas de Administración:** Las rutas `/dashboard/admin/cars-manager` y `/dashboard/admin/reserves-admin` actualmente NO están protegidas por roles. En un entorno de producción, estas rutas deberían estar protegidas. Por tratarse de un proyecto de demostración educativa, esta protección no ha sido implementada.

## 🎨 Actualización Reciente - Diciembre 2025

### ✨ Mejoras en el Diseño de Tarjetas de Autos
- **Componente CardCar Reutilizable** - Creado en `@/components/shared/CardCar` para eliminar código duplicado
- **Diseño Moderno y Consistente** - Tarjetas con bordes redondeados, sombras elegantes y efectos hover suaves
- **Imagen con Efectos** - Overlay gradiente y zoom al pasar el mouse
- **Badge de Precio Flotante** - Ubicado en la esquina superior izquierda
- **Botón de Favoritos Mejorado** - Con animaciones y mejor posicionamiento
- **Soporte para Dark Mode** - Todos los componentes adaptados para tema oscuro
- **Especificaciones Organizadas** - Componente `CardCarSpecs` con iconos en fondos redondeados
- **Responsive Design** - Grid adaptativo según el tamaño de pantalla
- **Reducción de Código** - De ~300 líneas totales a ~80 líneas reutilizables

### 🔧 Mejoras en Funcionalidad
- **Filtros Responsivos** - Grid adaptativo para móvil, tablet y desktop
- **Reset de Filtros** - Los select's se limpian correctamente al remover filtros
- **Modal de Edición** - Ahora se cierra correctamente al hacer clic fuera o en la X
- **Footer Informativo** - Advertencias claras sobre el uso de tarjetas de prueba

## 🛠️ Stack Tecnológico

- **[Next.js](https://nextjs.org)** - Framework React para producción
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de utilidades CSS
- **[Shadcn/UI](https://ui.shadcn.com/)** - Componentes de UI reutilizables
- **[Axios](https://axios-http.com/)** - Cliente HTTP para llamadas a APIs
- **[Cloudinary](https://cloudinary.com/)** - CDN y gestión de imágenes
- **[Prisma](https://www.prisma.io/)** - ORM para Node.js y TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Neon](https://neon.tech/)** - Serverless Postgres
- **[Clerk](https://clerk.com/)** - Autenticación y gestión de usuarios
- **[Stripe](https://stripe.com/)** - Pasarela de pagos
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gestión de estado global

## 🚀 Características Implementadas

- ✅ Autenticación de usuarios con Clerk
- ✅ Base de datos PostgreSQL con Prisma ORM
- ✅ Dashboard de administración
- ✅ Sistema de navegación con sidebar responsivo
- ✅ Modelos de datos para Cars y Orders
- ✅ **Pasarela de pagos con Stripe** - Procesamiento seguro de pagos para reservas
- ✅ **Sistema de favoritos con Zustand** - Los usuarios pueden marcar coches como favoritos con gestión de estado global
- ✅ **Página de favoritos** - Visualización de todos los coches guardados en favoritos
- ✅ **Componentes de UI Modernos** - Tarjetas reutilizables con diseño elegante y consistente
- ✅ **Responsive Design** - Diseño adaptativo para móvil, tablet y desktop
- ✅ **Filtros Avanzados** - Sistema de filtrado con reseteo completo de selección
- ✅ **Footer Informativo** - Advertencias de seguridad y datos de prueba

## 💳 Información de Prueba de Pagos

Para probar el sistema de pagos, utiliza **ÚNICAMENTE** estos datos de prueba:

```
Número de Tarjeta: 4242 4242 4242 4242
Fecha de Expiración: 12/28
Código de Seguridad (CVV): 123
```

🚫 **NUNCA USES TARJETAS REALES** - Esta aplicación procesa pagos a través de Stripe en modo de prueba, pero es solo para fines educativos.

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Cuenta en [Clerk](https://clerk.com/) para autenticación
- Cuenta en [Neon](https://neon.tech/) o una base de datos PostgreSQL

## ⚙️ Configuración

1. **Clona el repositorio:**
```bash
git clone https://github.com/Errold146/TerraCars.git
cd rent-cars
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Configura las variables de entorno:**

Crea un archivo `.env` en la raíz del proyecto:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clave_publica
CLERK_SECRET_KEY=tu_clave_secreta

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Database
DATABASE_URL="postgresql://usuario:password@host/database?sslmode=require"

# Stripe
STRIPE_SECRET_KEY=tu_clave_secreta_stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_clave_publica_stripe
STRIPE_WEBHOOK_SECRET=tu_secreto_webhook_stripe
```

4. **Sincroniza la base de datos:**
```bash
npx prisma generate
npx prisma db push
```

5. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
rent-cars/
├── app/
│   ├── (auth)/                    # Rutas de autenticación
│   │   ├── sign-in/              # Página de inicio de sesión
│   │   └── sign-up/              # Página de registro
│   ├── (routes)/                 # Rutas principales
│   │   ├── (dashboard)/          # Dashboard de administración
│   │   │   ├── dashboard/        # Vista principal del dashboard
│   │   │   │   ├── admin/        # Rutas de administrador
│   │   │   │   │   ├── cars-manager/      # Gestión de autos
│   │   │   │   │   └── reserves-admin/    # Gestión de reservas
│   │   │   │   └── components/   # Componentes del dashboard
│   │   │   ├── favorites-cars/   # Página de favoritos
│   │   │   └── reserves/         # Página de reservas del usuario
│   │   ├── (home)/               # Rutas públicas
│   │   │   ├── cars/             # Catálogo de autos
│   │   │   │   └── components/   # Filtros y listado
│   │   │   └── components/       # Componentes del home
│   │   ├── order-confirmation/   # Confirmación de pedido
│   │   └── order-error/          # Error en pedido
│   ├── api/                      # API Routes
│   │   ├── car/                  # Endpoints de autos
│   │   ├── checkout/             # Proceso de pago
│   │   ├── upload/               # Subida de imágenes
│   │   └── webhooks/stripe/      # Webhooks de Stripe
│   ├── layout.tsx                # Layout principal con Footer
│   └── globals.css               # Estilos globales
├── components/
│   ├── shared/                   # Componentes compartidos
│   │   ├── CardCar/              # 🆕 Tarjeta de auto reutilizable
│   │   │   ├── index.tsx         # Componente principal
│   │   │   └── CardCarSpecs.tsx  # Especificaciones del auto
│   │   ├── Footer/               # 🆕 Footer con advertencias
│   │   ├── ModalAddReservation/  # Modal de reserva
│   │   ├── Navbar/               # Barra de navegación
│   │   └── Reveal/               # Animaciones de reveal
│   └── ui/                       # Componentes Shadcn/UI
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── select.tsx
│       └── ...
├── hooks/
│   └── useFavoritesCars.ts       # Hook de favoritos con Zustand
├── lib/
│   ├── db.ts                     # Cliente Prisma
│   ├── stripe.ts                 # Configuración de Stripe
│   └── utils.ts                  # Utilidades y helpers
├── prisma/
│   └── schema.prisma             # Esquema de la base de datos
├── public/
│   └── images/                   # Imágenes estáticas
└── package.json
```

### 🔑 Componentes Clave

- **`CardCar`** - Componente reutilizable para mostrar tarjetas de autos en todo el sitio
- **`CardCarSpecs`** - Muestra las especificaciones técnicas de los vehículos
- **`Footer`** - Footer global con advertencias de seguridad y datos de prueba
- **`ModalAddReservation`** - Gestiona el proceso de reserva con calendario
- **`FilterCars`** - Sistema de filtrado responsive para el catálogo

## 🗄️ Modelos de Datos

### Car
- ID único
- Información del usuario propietario
- Detalles del vehículo (nombre, CV, transmisión, etc.)
- Precio por day
- Estado de publicación
- Relación con órdenes

### Order
- ID único
- Relación con el coche
- Información del usuario
- Fechas de inicio y fin
- Estado de la orden
- Monto total

## 🔧 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción
npm run lint         # Ejecuta el linter
```

## 📚 Recursos de Aprendizaje

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Prisma](https://www.prisma.io/docs)
- [Documentación de Clerk](https://clerk.com/docs)
- [Documentación de Shadcn/UI](https://ui.shadcn.com)

## 👨‍💻 Autor
Errold Núñez Sánchez, estudiante de programación especializado en JavaScript y sus diferentes Framework's de FrontEnd y BackEnd

## ✉️ Contacto
[![GitHub](https://img.shields.io/badge/GitHub-Errold146-181717?logo=github)](https://github.com/Errold146)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ErroldNúñezS-0A66C2?logo=linkedin)](https://linkedin.com/in/errold-núñez-sánchez) 
[![Email](https://img.shields.io/badge/Email-ErroldNúñezS-D14836?logo=gmail)](mailto:errold222@gmail.com)

Proyecto de práctica desarrollado para aprendizaje de desarrollo web full-stack.

---

⭐ Si te ha sido útil este proyecto, no olvides darle una estrella!
