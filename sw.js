// Version - Cache yeniləmə üçün bu nömrəni artır
const CACHE_VERSION = 'v6.2.0';
const CACHE_NAME = `unify-${CACHE_VERSION}`;

// Kritik resurslar - ilk açılışda mütləq lazım olanlar (kiçik fayllar)
const CRITICAL_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/icon-192.png',
];

// Əlavə resurslar - arxa planda yüklənir (böyük fayllar)
const SECONDARY_CACHE = [
    '/icon-512.png',
    '/logo.png',
    '/ios-chrome-install.js',
];

// ============================================
// Service Worker quraşdırma - Sürətli başlanğıc
// ============================================
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // Əvvəlcə yalnız kritik resursları yüklə (tez qurtarır)
                return cache.addAll(CRITICAL_CACHE);
            })
            .then(() => {
                // Dərhal aktiv et - gözləmə yoxdur
                self.skipWaiting();
                // Arxa planda əlavə resursları yüklə
                caches.open(CACHE_NAME).then(cache => {
                    cache.addAll(SECONDARY_CACHE).catch(() => {});
                });
            })
            .catch(() => self.skipWaiting())
    );
});

// ============================================
// Köhnə cache-ləri təmizlə
// ============================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            caches.keys().then((cacheNames) =>
                Promise.all(
                    cacheNames.map((name) => {
                        if (name !== CACHE_NAME) return caches.delete(name);
                    })
                )
            ),
            self.clients.claim()
        ])
    );
});

// ============================================
// Fetch handler - cache-first strategiyası (sürətli)
// ============================================
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Yalnız GET və same-origin
    if (request.method !== 'GET' || url.origin !== location.origin) return;

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) =>
            cache.match(request).then((cached) => {
                if (cached) {
                    // Arxa planda yenilə
                    fetch(request).then((response) => {
                        if (response && response.status === 200 && response.type === 'basic') {
                            cache.put(request, response.clone());
                        }
                    }).catch(() => {});
                    return cached;
                }
                return fetch(request).then((response) => {
                    if (response && response.status === 200 && response.type === 'basic') {
                        cache.put(request, response.clone());
                    }
                    return response;
                });
            })
        ).catch(() => caches.match('/index.html'))
    );
});

// ============================================
// Message handler - Skip waiting
// ============================================
self.addEventListener('message', (event) => {
    if (!event.data) return;
    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
