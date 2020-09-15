const router = require('express').Router();

const getCircularReplacer = require('../helpers/getCircularReplacer');
const callback = (req, res, next) => {
  const object = {
    req: JSON.parse(JSON.stringify(req, getCircularReplacer())),
    // res: JSON.parse(JSON.stringify(res, getCircularReplacer())),
  };

  const {
    req: {
      headers,
      url,
      method,
      params,
      query,
      body,
    },
  } = object;

  if (headers.host === 'localhost:5000') {
    console.log(object);
  };

  res.status(200).json({
    headers,
    url,
    method,
    params,
    query,
    body,
  });
};

router.get('', callback);
router.post('', callback);
router.put('', callback);
router.delete('', callback);
router.options('', callback);

module.exports = router;
