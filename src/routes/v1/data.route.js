const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const {getAllExchanged,
  getAllCancelled,
  getAllOrder,UpdateOrder} = require('../../controllers/data');

const router = express.Router();

router
  .route('/data/ex')
  .get( getAllExchanged);
  
  router
  .route('/data/ord')
  .get( getAllOrder);

  router
  .route('/data/ord/:id')
  .patch( UpdateOrder);
  
  router
  .route('/data/cl')
  .get( getAllCancelled);


module.exports = router;
