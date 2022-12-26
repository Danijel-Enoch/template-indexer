const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { 
  dataService } = require('../services');

const createOrder = catchAsync(async (req, res) => {
  const data = await dataService.createOrder(req.body);
  res.status(httpStatus.CREATED).send(data);
});
const createExchange = catchAsync(async (req, res) => {
  const data = await dataService.createExchange(req.body);
  res.status(httpStatus.CREATED).send(data);
});
const createCancelled = catchAsync(async (req, res) => {
  const data = await dataService.createCancelled(req.body);
  res.status(httpStatus.CREATED).send(data);
});
const getAllOrder = catchAsync(async (req, res) => {
  const result = await dataService.getAllOrder()
  res.send(result);
});
const UpdateOrder = catchAsync(async (req, res) => {
  const result = await dataService.updateOrderById(req.params.id,req.body)
  res.send(result);
});
const getAllCancelled = catchAsync(async (req, res) => {
  const result = await dataService.getAllCancelled()
  res.send(result);
});
const getAllExchanged = catchAsync(async (req, res) => {
  const result = await dataService.getAllExchanged()
  res.send(result);
});


module.exports = {
  getAllExchanged,
  getAllCancelled,
  getAllOrder,
  createExchange,
  createCancelled,
  createOrder,
  UpdateOrder
};
