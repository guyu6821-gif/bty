// Version - Cache yeniləmə üçün bu nömrəni artır
const CACHE_VERSION = 'v1.3.18';
const CACHE_NAME = `bdu-hesablayici-${CACHE_VERSION}`;

// iOS Safari üçün sadələşdirilmiş cache siyahısı
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/logo.png',
    '/icon-192.png',
    '/icon-512.png',
    '/sitemap.xml',
    '/robots.txt'
];

// Service Worker quraşdırma - iOS Safari uyğun
self.addEventListener('install', (event) => {
    console.log('[SW] Quraşdırılır:', CACHE_VERSION);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Cache açıldı:', CACHE_NAME);
                // iOS Safari üçün sadə addAll
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('[SW] Fayllar cache edildi');
                // iOS-da skipWaiting dərhal çağırılmalıdır
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Install xətası:', err);
                // Xəta olsa belə skipWaiting çağır
                return self.skipWaiting();
            })
    );
});

// Köhnə cache-ləri təmizlə
self.addEventListener('activate', (event) => {
    console.log('[SW] Aktivləşdirilir:', CACHE_VERSION);
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[SW] Köhnə cache silinir:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Hazırdır:', CACHE_VERSION);
                return self.clients.claim();
            })
            .catch((err) => {
                console.error('[SW] Activate xətası:', err);
            })
    );
});

// iOS Safari üçün sadələşdirilmiş fetch handler
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);
    
    // Yalnız GET və same-origin sorğuları
    if (request.method !== 'GET' || url.origin !== location.origin) {
        return;
    }
    
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                // Cache-dən cavab varsa qaytır
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Network-dən yüklə və cache et
                return fetch(request).then((response) => {
                    // Əgər cavab uğurlu deyilsə, cache etmə
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Cavabı klonla və cache et
                    const responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseToCache);
                    });
                    
                    return response;
                });
            })
            .catch(() => {
                // Offline halında index.html qaytır
                return caches.match('/index.html');
            })
    );
});

// iOS-da Service Worker yenilənməsi üçün
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[SW] Skip waiting mesajı alındı');
        self.skipWaiting();
    }
});
