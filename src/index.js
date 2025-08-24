import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

// Disable Turbo if it's included in the page
if (window.Turbo) {
  window.Turbo.session.drive = false;
  window.Turbo.navigator = null;
  
  // Remove all Turbo event listeners
  const events = [
    'turbo:click',
    'turbo:before-visit',
    'turbo:visit',
    'turbo:submit-start',
    'turbo:before-fetch-request',
    'turbo:before-fetch-response',
    'turbo:before-cache',
    'turbo:before-render',
    'turbo:before-stream-render',
    'turbo:render',
    'turbo:load',
    'turbo:frame-render',
    'turbo:frame-load',
    'turbo:frame-missing',
    'turbo:fetch-request-error'
  ];
  
  events.forEach(event => {
    document.removeEventListener(event, () => {});
  });
}

// Create root and render app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Log any unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Register service worker in production only
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  const registerServiceWorker = () => {
    const publicUrl = new URL(process.env.PUBLIC_URL || '/', window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      console.log('Service worker not registered: Different origins');
      return;
    }

    const swUrl = `${process.env.PUBLIC_URL || ''}/service-worker.js`;
    
    // Check if service worker exists and is valid
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
      cache: 'no-store'
    })
    .then(response => {
      const contentType = response.headers.get('content-type') || '';
      if (response.status === 404 || !contentType.includes('javascript')) {
        console.error('Service worker not found or invalid content type');
        return null;
      }
      
      // Register service worker
      return navigator.serviceWorker.register(swUrl, { 
        scope: '/',
        updateViaCache: 'none'
      });
    })
    .then(registration => {
      if (!registration) return;
      
      console.log('ServiceWorker registered with scope:', registration.scope);
      
      registration.onupdatefound = () => {
        const worker = registration.installing;
        if (!worker) return;
        
        worker.onstatechange = () => {
          if (worker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content available; please refresh.');
              // Show update notification to user
              if (window.confirm('New version available! Would you like to refresh to update?')) {
                window.location.reload();
              }
            } else {
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Service worker registration failed:', error);
    });
  };

  window.addEventListener('load', registerServiceWorker);
}
