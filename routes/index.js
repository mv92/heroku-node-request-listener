const router = require('express').Router();

const getCircularReplacer = require('../helpers/getCircularReplacer');
const callback = (req, res, next) => {
  const object = {
    req: JSON.parse(JSON.stringify(req, getCircularReplacer())),
    res: JSON.parse(JSON.stringify(res, getCircularReplacer())),
  };

  console.log(object);
  res.status(200).json(object);
};

router.get('', callback);
router.post('', callback);
router.put('', callback);
router.delete('', callback);
router.option('', callback);

module.exports = router;
