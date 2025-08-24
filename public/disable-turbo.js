// Disable Turbo Drive if it's loaded
if (window.Turbo) {
  console.log('Turbo detected, disabling...');
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
  
  console.log('Turbo has been disabled');
}
