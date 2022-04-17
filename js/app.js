if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(() => navigator.serviceWorker.ready)
        .then(registration => {
          if ('SyncManager' in window) {
            registration.sync.register('sync-messages')
          }
        })
    .catch((err) => console.log('service worker not registered'));
}