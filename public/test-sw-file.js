// This is a test endpoint to verify the service worker file is served correctly
console.log('Service worker test file loaded successfully');

// This is a valid service worker that does nothing
self.addEventListener('install', event => {
  console.log('Test service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Test service worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Let the browser handle the request normally
  return;
});
