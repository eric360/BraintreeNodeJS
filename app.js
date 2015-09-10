// var express = require('express')
// var app = express()
// app.set('port', (process.env.PORT || 5000))
// app.use(express.static(__dirname + '/public'))
// app.get('/', function(request, response) {
//   response.send('Hello Stella!')
// })
// app.get('/express', function(request, response) {
//   response.send('Hello Express')
// })
// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })
// var braintree = require("braintree");
var express = require('express')
var app = express()
app.set('port', (process.env.PORT || 5000))
// var gateway = braintree.connect({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "9dq27nvc89qsnc6x",
//   publicKey: "jqs84kk9bdf8t27b",
//   privateKey: "4dccccd963098572afcfd69b81d61068"
// });
// app.get("/client_token", function (req, res) {
//   gateway.clientToken.generate({}, function (err, response) {
//     res.send(response.clientToken);
//   });
// });
// app.post("/payment-methods", function (req, res) {
//   var nonce = req.body.payment_method_nonce;
//   // Use payment method nonce here
// });
app.get('/express', function(request, response) {
  response.send('Hello Express')
})
// gateway.transaction.sale({
//   amount: '1000.00',
//   paymentMethodNonce: "fake-valid-nonce",
// }, function (err, result) {
// });
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
