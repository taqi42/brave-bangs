const CACHE = 'brave-bangs-v1';
const ASSETS = ['/', '/index.html', '/style.css', '/script.js'];

// Install — cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — intercept ?q= and redirect instantly without loading the page
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // If there's a ?q= param, handle redirect directly in the service worker
  if (url.searchParams.has('q')) {
    const q = url.searchParams.get('q').trim();
    if (q) {
      const hasBang = /(?:^|\s)![\w]/.test(q);
      const dest = hasBang
        ? `https://search.brave.com/search?q=${encodeURIComponent(q)}`
        : `https://www.google.com/search?q=${encodeURIComponent(q)}`;
      e.respondWith(Response.redirect(dest, 302));
      return;
    }
  }

  // Otherwise serve from cache, fall back to network
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
