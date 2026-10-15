// Version - Cache yeniləmə üçün bu nömrəni artır
const CACHE_VERSION = 'v10.0.0';
const CACHE_NAME = `unify-${CACHE_VERSION}`;

// Kritik resurslar - ilk açılışda mütləq lazım olanlar (kiçik fayllar)
const CRITICAL_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/logo-256.png',
];

// Əlavə resurslar - arxa planda yüklənir (böyük fayllar)
const SECONDARY_CACHE = [
    '/icon-192.png',
    '/icon-512.png',
    '/apple-touch-icon.png',
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
// Cache açılışını bir dəfə saxlayırıq - hər sorğuda yenidən açılmasın (performans)
let _cachePromise = null;
function getCache() {
    if (!_cachePromise) _cachePromise = caches.open(CACHE_NAME);
    return _cachePromise;
}

self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Yalnız GET sorğuları
    if (request.method !== 'GET') return;

    // Yalnız http(s) sxemləri (chrome-extension və s. kənar qalsın)
    if (!request.url.startsWith('http')) return;

    let url;
    try { url = new URL(request.url); } catch (e) { return; }

    // Yalnız öz domenimiz (Supabase/analytics kənardır - toxunmuruq)
    if (url.origin !== self.location.origin) return;

    // Range sorğuları (media) cache-ə yazılmır
    if (request.headers.has('range')) return;

    event.respondWith(
        getCache().then((cache) =>
            cache.match(request).then((cached) => {
                if (cached) {
                    // Arxa planda səssiz yenilə (istifadəçini gözlətmədən)
                    fetch(request).then((response) => {
                        if (response && response.status === 200 && response.type === 'basic') {
                            cache.put(request, response.clone());
                        }
                    }).catch(() => {});
                    return cached;
                }
                return fetch(request).then((response) => {
                    // Yalnız uğurlu və tam cavabları yaz (səhv səhifələri yazmırıq)
                    if (response && response.status === 200 &&
                        response.type === 'basic' && !response.headers.has('content-range')) {
                        cache.put(request, response.clone());
                    }
                    return response;
                });
            })
        ).catch(() => caches.match('/index.html').then(r => r || fetch('/index.html')))
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
