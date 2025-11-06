# Proyecto New Curriculum 📚

Este es el repositorio del proyecto New Curriculum, una aplicación web moderna construida con Next.js, React, TypeScript y Tailwind CSS.

---

## 🎯 Propósito del Proyecto

Este proyecto fue desarrollado para asistir a los estudiantes de la carrera de Ingeniería en Computadores durante un importante proceso de transición de plan de estudios.

Ante el desafío de que una sola secretaría atendiera las consultas de más de 600 estudiantes, se creó esta herramienta para:

* **Centralizar la información:** Servir como una fuente única y confiable sobre el cambio de plan.
* **Resolver dudas:** Permitir a los estudiantes entender su situación actual y visualizar el resultado y las equivalencias al pasarse al nuevo plan de estudios.
* **Automatizar el soporte:** Incluye un chat integrado con el API de OpenAI, entrenado para responder las preguntas más frecuentes de los estudiantes y aligerar la carga de trabajo administrativo.

---

## 🚀 Cómo Empezar

Sigue estos pasos para tener una copia local del proyecto funcionando.

### Prerrequisitos

Asegúrate de tener el siguiente software instalado en tu máquina:

* **Node.js**: Se recomienda la versión 18 o superior.
* **pnpm**: Este proyecto utiliza `pnpm` como gestor de paquetes.

Puedes instalar `pnpm` globalmente (después de instalar Node.js) con:
```bash
npm install -g pnpm
```

O, si usas Node.js \>= 16.14, puedes habilitar `corepack`:

```bash
corepack enable
```

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/tu-usuario/newcurriculum.git](https://github.com/tu-usuario/newcurriculum.git)
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd newcurriculum
    ```

3.  **Instala las dependencias:**

    ```bash
    pnpm install
    ```

-----

## 💻 Ejecución

### Modo de Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Scripts Disponibles

Este proyecto incluye los siguientes scripts definidos en `package.json`:

  * `pnpm dev`: Inicia el servidor de desarrollo.
  * `pnpm build`: Compila la aplicación para producción.
  * `pnpm start`: Inicia el servidor de producción (requiere `pnpm build` primero).
  * `pnpm lint`: Ejecuta el linter (ESLint) para revisar el código.

-----

## 🐳 Ejecutar con Docker

Para ejecutar la aplicación en un contenedor de Docker, sigue estos pasos.

### 1\. Prepara tu `next.config.js`

Para una compilación de Docker optimizada, te recomendamos usar la salida "standalone" de Next.js. Asegúrate de que tu archivo `next.config.js` incluya esto:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...otras configuraciones
  output: 'standalone',
};

module.exports = nextConfig;
```

### 2\. Crea un `Dockerfile`

Crea un archivo llamado `Dockerfile` en la raíz de tu proyecto con el siguiente contenido:

```dockerfile
# Etapa 1: Instalación de dependencias
FROM node:18-alpine AS deps
WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar archivos de manifiesto y bloqueo
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias 'pure' (sin scripts de post-instalación)
RUN pnpm install --frozen-lockfile --prod=false

# Etapa 2: Compilación (Builder)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Compilar el proyecto
RUN pnpm build

# Etapa 3: Ejecución (Runner)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copiar la salida 'standalone' optimizada
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### 3\. Crea un `.dockerignore`

Crea un archivo llamado `.dockerignore` en la raíz para acelerar la compilación:

```text
.git
.github
node_modules
.next
out
```

### 4\. Construye la imagen de Docker

Desde la raíz de tu proyecto, ejecuta:

```bash
docker build -t newcurriculum .
```

### 5\. Ejecuta el contenedor

Una vez construida la imagen, puedes ejecutarla:

```bash
docker run -p 3000:3000 newcurriculum
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).
