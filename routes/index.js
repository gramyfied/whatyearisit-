
var express = require('express');
var router = express.Router();


router.get('/year', (req, res) => {
  const year = new Date().getFullYear().toString();
  res.json({ year: year });
});
module.exports = router;
