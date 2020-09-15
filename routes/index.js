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

  if (headers.host.includes('localhost:')) {
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

router.get('/:id*?/:action*?', callback);
router.post('/:id*?/:action*?', callback);
router.put('/:id*?/:action*?', callback);
router.delete('/:id*?/:action*?', callback);
router.patch('/:id*?/:action*?', callback);
router.options('/:id*?/:action*?', callback);

module.exports = router;
