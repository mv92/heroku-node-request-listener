const router = require('express').Router();

const getCircularReplacer = require('../helpers/getCircularReplacer');

router.get('', (req, res, next) => {
  const object = {
    req: JSON.parse(JSON.stringify(req, getCircularReplacer())),
    res: JSON.parse(JSON.stringify(res, getCircularReplacer())),
  };

  console.log(object);
  res.status(200).json(object);
});

module.exports = router;
