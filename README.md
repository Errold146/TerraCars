# 🚗 TerraCars

[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-API-blue?logo=cloudinary&logoColor=white)](https://cloudinary.com/)

**TerraCars** es una aplicación web de práctica para la renta de coches, desarrollada con tecnologías modernas del stack Next.js.

> ⚠️ **Nota:** Este es un proyecto de práctica educativa. Todos los datos y funcionalidades son ficticios.

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

## 🚀 Características Implementadas

- ✅ Autenticación de usuarios con Clerk
- ✅ Base de datos PostgreSQL con Prisma ORM
- ✅ Dashboard de administración
- ✅ Sistema de navegación con sidebar responsivo
- ✅ Modelos de datos para Cars y Orders

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
│   ├── (auth)/          # Rutas de autenticación
│   ├── (routes)/        # Rutas principales
│   │   └── (dashboard)/ # Dashboard de administración
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── ui/              # Componentes Shadcn/UI
├── lib/
│   ├── db.ts            # Cliente Prisma
│   └── utils.ts
├── prisma/
│   └── schema.prisma    # Esquema de la base de datos
└── public/
```

## 🗄️ Modelos de Datos

### Car
- ID único
- Información del usuario propietario
- Detalles del vehículo (nombre, CV, transmisión, etc.)
- Precio por día
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
Errold Núñez Sánchez, estudiante de programación especializado en JavaScript y sus diferentes Framework's de ForntEnd y BackEnd

## ✉️ Contacto
[![GitHub](https://img.shields.io/badge/GitHub-Errold146-181717?logo=github)](https://github.com/Errold146)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ErroldNúñezS-0A66C2?logo=linkedin)](https://linkedin.com/in/errold-núñez-sánchez) 
[![Email](https://img.shields.io/badge/Email-ErroldNúñezS-D14836?logo=gmail)](mailto:errold222@gmail.com)

Proyecto de práctica desarrollado para aprendizaje de desarrollo web full-stack.

---

⭐ Si te ha sido útil este proyecto, no olvides darle una estrella!
