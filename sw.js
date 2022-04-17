// install service worker
self.addEventListener('install', evt =>{
    console.log('service worker is installed');
});

// activate service worker
self.addEventListener('activate', evt =>{
    console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', evt =>{
    console.log('fetch event', evt);
});

//sync event
self.addEventListener('sync', event => {
    if (event.tag =='sync-messages') {
       event.waitUntil('syncMessages');
    }
 })

 self.addEventListener('push', function(event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
      return;
    }
  
    var data = {};
    if (event.data) {
      data = event.data.json();
    }
    var title = data.title || "Something Has Happened";
    var message = data.message || "Here's something you might want to check out.";
    var icon = "images/new-notification.png";
  
    var notification = new self.Notification(title, {
      body: message,
      tag: 'simple-push-demo-notification',
      icon: icon
    });
  
    notification.addEventListener('click', function() {
      if (clients.openWindow) {
        clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
      }
    });
  });