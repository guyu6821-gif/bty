// Version - Cache yeniləmə üçün bu nömrəni artır
const CACHE_VERSION = 'v1.0.2';
const CACHE_NAME = `bdu-hesablayici-${CACHE_VERSION}`;

// Cache ediləcək fayllar
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
    console.log('Service Worker quraşdırılır:', CACHE_VERSION);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache açıldı');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('Bütün fayllar cache edildi');
                return self.skipWaiting(); // Yeni versiya dərhal aktivləşsin
            })
    );
});

// Köhnə cache-ləri təmizlə
self.addEventListener('activate', (event) => {
    console.log('Service Worker aktivləşdirilir:', CACHE_VERSION);
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Köhnə cache silinir:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker hazırdır:', CACHE_VERSION);
            return self.clients.claim(); // Dərhal bütün səhifələri idarə et
        })
    );
});

// Sorğuları idarə et - Cache first strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache-də tapılsa, onu ver
                if (response) {
                    return response;
                }
                
                // Cache-də yoxdursa, şəbəkədən yüklə
                return fetch(event.request).then((response) => {
                    // Keçərli cavab deyilsə, elə onu ver
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Cavabı klonla və cache-ə əlavə et
                    const responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return response;
                });
            })
            .catch(() => {
                // Şəbəkə əlçatmaz və cache-də yoxdursa
                return new Response('Offline mode - məlumat yoxdur', {
                    status: 503,
                    statusText: 'Service Unavailable'
                });
            })
    );
});
