# Codecorsa PWA — lista para GitHub Pages

Aplicación web progresiva (PWA) de Codecorsa, adaptada a teléfonos y basada en el modelo visual proporcionado. Incluye accesos a categorías, locales, WhatsApp, llamada, compartir, instrucciones de instalación, manifest e inicio sin conexión básico.

## Publicar en el repositorio existente

1. Descarga y descomprime `codecorsa-app-github.zip`.
2. Abre el repositorio: https://github.com/codecorsa/app
3. Sube los archivos y carpetas de esta carpeta a la **raíz** del repositorio (donde está el `index.html` actual). Si GitHub pregunta si deseas reemplazar archivos, revisa antes el contenido que ya tienes.
4. En GitHub entra a **Settings → Pages** y verifica que publique desde `main` y `/ (root)`.
5. Espera a que termine el despliegue y abre: https://codecorsa.github.io/app/

## Instalar en el teléfono

- **Android:** abre la web con Chrome → menú ⋮ → “Instalar aplicación” o “Añadir a pantalla de inicio”.
- **iPhone:** abre la web con Safari → Compartir → “Añadir a pantalla de inicio”.

La instalación como PWA requiere HTTPS, por lo que se instala desde GitHub Pages; abrir el HTML directamente como archivo no permite todas las funciones.

## Antes de publicar

- Revisa los enlaces de Facebook e Instagram/TikTok en `index.html`; actualmente apuntan a las páginas generales de las redes porque no se proporcionaron los enlaces exactos de las cuentas.
- Los botones de categorías apuntan a `https://codecorsa.com`. Si la tienda usa otra dirección, cámbiala en `index.html`.
- El botón de WhatsApp y llamada usa `+51 959 276 293`, según el diseño compartido.
- Las fotos de las categorías son recortes de la imagen de referencia aportada, para que el diseño funcione sin depender de recursos externos. Puedes sustituirlas por fotos originales de cada producto cuando las tengas.

## Archivos principales

- `index.html`: estructura y enlaces.
- `styles.css`: diseño adaptable a móvil.
- `app.js`: compartir, modal de instalación y registro del service worker.
- `manifest.webmanifest`: datos de instalación.
- `service-worker.js`: caché para funcionamiento básico sin conexión.
- `assets/`: logo, iconos, fotos y QR.
