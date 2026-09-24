// Version - Cache yeniləmə üçün bu nömrəni artır
const CACHE_VERSION = 'v4.0.0';
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

// ============================================
// Service Worker quraşdırma
// ============================================
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
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
// Fetch handler - stale-while-revalidate strategiyası
// ============================================
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

// ============================================
// Push Notification handler - Mobil üçün tam dəstək
// ============================================
self.addEventListener('push', (event) => {
    let data = {
        title: 'UniFy',
        body: 'Yeni bildiriş var',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: 'unify-notification',
        renotify: true,
        requireInteraction: false,
        vibrate: [200, 100, 200, 100, 200],
        data: { url: '/' }
    };

    try {
        if (event.data) {
            const parsed = event.data.json();
            data = Object.assign({}, data, parsed);
        }
    } catch (e) {
        try {
            if (event.data) {
                const text = event.data.text();
                if (text) data.body = text;
            }
        } catch (e2) {}
    }

    const options = {
        body: data.body,
        icon: data.icon || '/icon-192.png',
        badge: data.badge || '/icon-192.png',
        tag: data.tag || 'unify-notification',
        renotify: data.renotify !== undefined ? data.renotify : true,
        requireInteraction: data.requireInteraction || false,
        vibrate: data.vibrate || [200, 100, 200],
        data: data.data || { url: '/' },
        actions: data.actions || [],
        silent: false
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// ============================================
// Notification click handler
// ============================================
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const urlToOpen = (event.notification.data && event.notification.data.url)
        ? event.notification.data.url
        : '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // Mövcud tab varsa onu focus et
                for (const client of clientList) {
                    if (client.url && client.focus) {
                        client.focus();
                        return;
                    }
                }
                // Yoxsa yeni tab aç
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});

// ============================================
// Notification close handler
// ============================================
self.addEventListener('notificationclose', (event) => {
    // Bildiriş bağlandıqda analitika üçün istifadə edilə bilər
});

// ============================================
// Message handler - Skip waiting
// ============================================
self.addEventListener('message', (event) => {
    if (!event.data) return;

    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    // Push subscription yeniləmə mesajı
    if (event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
});

// ============================================
// Background Sync (mövcud olduqda)
// ============================================
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-notifications') {
        event.waitUntil(syncNotifications());
    }
});

async function syncNotifications() {
    // Background sync zamanı pending bildirişlər yoxlanıla bilər
    // Bu funksiya əsas app.js-dəki checkScheduledNotifications ilə əlaqələndirilə bilər
}
