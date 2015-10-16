var port;

self.addEventListener('push', function(event) {  
  
  var title = 'Yay a message.';  
  var body = 'Subscription has changed.';  
  var icon = 'push-icon.png';  
  var tag = 'push';
 
  self.registration.showNotification(title, {  
    body: body,  
    icon: icon,  
    tag: tag  
  });
  
  var messageData = event.data;
  port.postMessage(messageData + '\'s subscription has changed.');
  
});

self.onmessage = function(e) {
  port = e.ports[0];
}