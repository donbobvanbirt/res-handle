const express = require('express');
const router = express.Router();

const Model = require('./testModel');

router.route('/')
  .get((req, res) => {
    Model.testGet(res.handle)
  })
  .post((req, res) => {
    console.log('req.body:', req.body);
    Model.testPost(req.body, res.handle)
  })

router.route('/bad')
  .get((req, res) => {
    Model.badGet(res.handle)
  })

module.exports = router;
