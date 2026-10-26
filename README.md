# CODECORSA — aplicación de catálogo y compras por WhatsApp

Prototipo web adaptable a móviles, creado desde cero a partir de la información pública de https://www.codecorsa.com/.

## Funcionalidades
- Identidad visual con el logotipo proporcionado y colores corporativos rojo, blanco, gris y negro.
- Seis categorías: Cortinas, Roller, Motorización, Alfombras / Papel Tapiz, Puertas de ducha y Toldos.
- Búsqueda y filtrado de productos.
- Carrito funcional: agregar productos, cambiar cantidades y eliminarlos.
- Preparación del pedido y derivación a WhatsApp `+51 920 744 261`, con productos y cantidades en el mensaje.
- Sección con los tres locales y enlaces a Google Maps.
- Diseño responsive con navegación inferior para celulares.

## Ejecutar en local
Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación.

## Crear versión de producción
```bash
npm run build
npm run preview
```

El resultado de producción queda en `dist/`.

## Publicar en GitHub Pages
1. Sube el contenido del proyecto a un repositorio GitHub.
2. En la configuración del repositorio, activa Pages mediante GitHub Actions o despliega la carpeta `dist/` con un flujo de Vite.
3. Si el repositorio se publica en una ruta de subcarpeta, configura `base` en `vite.config.js` (este archivo se puede añadir según el nombre del repositorio).

## Datos de contacto y locales
- WhatsApp para pedidos: `+51 920 744 261`
- Contacto mostrado en la web de referencia: `leyva@codecorsa.com`, `+51 959 276 293`
- Av. San Luis 2040, San Borja, Lima
- Av. La Molina 1007, La Molina, Lima
- Av. La Molina 1047 Tda 28, La Molina, Lima

## Consideraciones
- Los productos y categorías se basan en la web pública. Los precios se muestran como **A consultar**; no se inventan importes.
- Las fotografías de muestra se cargan desde URLs externas de Unsplash y requieren conexión a internet.
- Esta versión es un prototipo front-end: el carrito vive en memoria durante la sesión y no hay base de datos, cuentas de usuario ni sincronización con el inventario de la tienda.
- El checkout abre WhatsApp con un mensaje prellenado; el usuario debe pulsar enviar en WhatsApp para completar el contacto.
- Verifica nombres, imágenes, modelos y disponibilidad con CODECORSA antes de publicar en producción.
