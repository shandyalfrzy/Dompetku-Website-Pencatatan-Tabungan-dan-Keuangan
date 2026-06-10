const CACHE_NAME = 'dompetku-v1';
const ASSETS = [
  './',
  './index.html',
  './src/output.css',
  './src/app.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  // Only cache local assets, skip API calls
  if (!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
