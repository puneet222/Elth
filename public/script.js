if ('serviceWorker' in navigator) {
  console.log("Will the service worker register?");
  navigator.serviceWorker.register('sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);
    swRegistration = swReg;
    initialiseUI();
  }).catch(function(err) {
      console.log("No it didn't. This happened: ", err)
    });
}

function initialiseUI() {
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    console.log(subscription) ;
    console.log(JSON.stringify(subscription)) ;

    // this is function to update the subscription on the server
    // updateSubscriptionOnServer(subscription);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
      subscribeUser() ;
    }
    //
    // updateBtn();
  });
}

function subscribeUser() {
  var applicationServerPublicKey = 'BInUILBqF9q1fzn754Y8lEFnObRSv3Va24DtOeNjyKm95fojlrLCpySEA-uuflizL2aPfV3c0Mlbbo6byyIxcrI' ;
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed.');
    console.log(subscription) ;
    // updateSubscriptionOnServer(subscription);

    isSubscribed = true;

    // updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    // updateBtn();
  });
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
