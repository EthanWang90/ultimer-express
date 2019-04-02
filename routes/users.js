var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource again');
});

router.get('/test', function(req, res, next) {
  res.status(200).json({
    resArr : [
      {
        name : 'jack'
      },
      {
        name : 'rose'
      }
    ],
    message: 'json response test'
  });
})

module.exports = router;
