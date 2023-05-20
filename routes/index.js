var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

// @route    GET api/users
// @desc     Get all users
// @access   Public
router.get('/profile/2', function(req, res, next) {
  res.render('button.ejs');
});



router.get('/', userController.getUsers);

module.exports = router;
