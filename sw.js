var port;

self.addEventListener('push', function(event) {  
  var messageData = event.data; 

  if(messageData[0] === 'subscribe') {

    var title = 'New subscriber!';  
    var body = messageData[1] + ' has subscribed.';  
    var icon = 'push-icon.png';  
    var tag = 'push';

    event.waitUntil(  
      self.registration.showNotification(title, {  
        body: body,  
        icon: icon,  
        tag: tag  
      })  
    );

    port.postMessage(['subscribe', messageData[1]]);
  } else if(messageData[0] === 'unsubscribe') {

    var title = 'New subscriber!';  
    var body = messageData[1] + ' has unsubscribed.';  
    var icon = 'push-icon.png';  
    var tag = 'push';

    event.waitUntil(  
      self.registration.showNotification(title, {  
        body: body,  
        icon: icon,  
        tag: tag  
      })  
    );

    port.postMessage(['unsubscribe', messageData[1]]);
  }
});

self.onmessage = function(e) {
  port = e.ports[0];
}