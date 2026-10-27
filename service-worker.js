const CACHE='codecorsa-pwa-v1';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/logo-codecorsa.jpg','./assets/icon-192.png','./assets/icon-512.png','./assets/hero-living.jpg','./assets/cortinas.jpg','./assets/roller.jpg','./assets/motorizacion.jpg','./assets/alfombras.jpg','./assets/puertas-ducha.jpg','./assets/toldos.jpg','./assets/qr-app.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match('./index.html'))))});
