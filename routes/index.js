const router = require('express').Router();

const callback = (req, res, next) => {

  const responseObject = {
    headers: req.headers,
    url: req.url,
    method: req.method,
    params: req.params,
    query: req.query,
    body: req.body,
  };

  console.log(responseObject);
  res.status(200).json(responseObject);
};

router.get('/:id*?/:action*?', callback);
router.post('/:id*?/:action*?', callback);
router.put('/:id*?/:action*?', callback);
router.delete('/:id*?/:action*?', callback);
router.patch('/:id*?/:action*?', callback);
router.options('/:id*?/:action*?', callback);

module.exports = router;
