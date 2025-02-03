const cacheName = 'v1';

self.addEventListener('install', function (e) {
    // Optional: Cache important resources during installation
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/script.js'
        ]);
      })
    );
  });
  

// Call Activate Event
self.addEventListener('activate', function (e) {
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cache) {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', function (e) {
  
  // Only handle GET requests
  if (e.request.method !== 'GET') {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        // Make copy/clone of response
        const resClone = res.clone();
        // Open cache
        caches.open(cacheName).then(function (cache) {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(function (err) {
        return caches.match(e.request).then(function (res) {
          return res;
        });
      })
  );
});
