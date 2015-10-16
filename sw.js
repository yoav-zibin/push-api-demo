var port;

self.addEventListener('push', function(event) {  
  var obj = JSON.parse(event.data);
  
  var title = 'Subscription change';  
  var body = obj.name + ' has ' + obj.action + '.';  
  var icon = 'push-icon.png';  
  var tag = 'push';
 
  self.registration.showNotification(title, {  
    body: body,  
    icon: icon,  
    tag: tag  
  });
  
  port.postMessage(obj.name + ' has ' + obj.action + '.');
  
});

self.onmessage = function(e) {
  port = e.ports[0];
}