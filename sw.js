self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('admin-panel-cache').then(cache => {
      return cache.addAll([
        '/admin.html',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png',
        // Adicione outros arquivos que você deseja armazenar em cache
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
