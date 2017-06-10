var express = require('express');
var app = express();
var webPush = require('web-push');
var bodyParser = require('body-parser')


app.set('port', 5000);
app.use(express.static(__dirname + '/'));

app.use(bodyParser.json())

webPush.setGCMAPIKey('AAAA3qfrDsM:APA91bFDpAEeDZbU1gZTXDHpUYe5Px4EB-cCFzqo4qA9qfh8WSDqBr7gFBOtc-vh3K0f-FoXrQNeObCL2agsFWEGqeTw79dxK0RvmUA1xB2W1KQE9tLCzl8mvYo6OeZ85M77I9FM76Fi');

// app.post('/register', function(req, res) {
//   // A real world application would store the subscription info.
//   res.sendStatus(201);
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/sendNotification', function(req, res) {

  console.log(req.body)

  webPush.sendNotification(req.body.endpoint, {
      payload: JSON.stringify({
        'title': req.body.title,
        'icon': req.body.icon,
        'body': req.body.body,
        'url': req.body.link
      }),
      userPublicKey: req.body.key,
      userAuth: req.body.authSecret,
    })
    .then(function() {
      console.log("sent push")
      res.sendStatus(201);
    }, function(err) {
      console.log('webpusherr', err);

    });

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
