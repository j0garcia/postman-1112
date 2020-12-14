const { query } = require('express');
var express = require('express');
var router = express.Router();
const axiox = require("axios");

const UserController = require("../controllers/userController");
const UserInstance = new UserController();

router.get('/', function(req, res, next){
  UserInstance.showNames(req, res);
});

router.post('/add/', function(req, res, next) {
  UserInstance.postName(req, res);
});

router.put('/modify', function(req, res, next) {
  UserInstance.modifyName(req, res);
})

router.delete('/delete/:index', function(req, res, next) {
  UserInstance.deleteName(req, res);
})

module.exports = router;