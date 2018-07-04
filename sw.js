// servic worker
(() => {
   // registering service worker
   if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => console.log('service worker registered')).catch(() => console.log('service worker not registered'))
   }
  // assets to cach

  const filesToBeCached = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
  ];
  // caching all the files
  self.addEventListener('install', (event) => event.waitUntil(caches.open('cache1').then((cache) => cache.addAll(filesToBeCached))));
  // using the cached files
  self.addEventListener('fetch', (event) => event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))));

 })();
