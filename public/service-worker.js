
// 'use strict';

self.addEventListener('push', function(event) {
  console.log(event) ;
  console.log('[Service Worker] Push Received.');
  // console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Notification';
  const options = {
    body: 'Yay it works.'
    icon: '../outerImages/notify.png',
    // badge: 'images/badge.png'
  };

  const notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});
