// Version - Cache yeniləmə üçün bu nömrəni artır
const CACHE_VERSION = 'v3.0.0';
const CACHE_NAME = `bdu-hesablayici-${CACHE_VERSION}`;

// Cache siyahısı
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/logo.png',
    '/icon-192.png',
    '/icon-512.png'
];

// Service Worker quraşdırma
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
            .catch(() => self.skipWaiting())
    );
});

// Köhnə cache-ləri təmizlə
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) return caches.delete(name);
                })
            ))
            .then(() => self.clients.claim())
    );
});

// Fetch handler - stale-while-revalidate strategiyası
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Yalnız GET və same-origin
    if (request.method !== 'GET' || url.origin !== location.origin) return;

    // Supabase sorğuları cache edilməsin
    if (url.hostname.includes('supabase.co')) return;

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) =>
            cache.match(request).then((cached) => {
                const fetchPromise = fetch(request).then((response) => {
                    if (response && response.status === 200 && response.type === 'basic') {
                        cache.put(request, response.clone());
                    }
                    return response;
                });
                return cached || fetchPromise;
            })
        ).catch(() => caches.match('/index.html'))
    );
});

// Push Notification handler
self.addEventListener('push', (event) => {
    let data = { title: 'UniFy', body: 'Yeni bildiriş', icon: '/icon-192.png' };
    try {
        if (event.data) {
            data = Object.assign(data, event.data.json());
        }
    } catch (e) {}

    const options = {
        body: data.body,
        icon: data.icon || '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [200, 100, 200],
        data: data.data || {},
        actions: data.actions || []
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});

// Skip waiting mesajı
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
