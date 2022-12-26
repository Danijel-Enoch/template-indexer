const httpStatus = require('http-status');
const { OrderCreated,OrderCancelled,OrderExchanged } = require('../models');
const ApiError = require('../utils/ApiError');

const createOrder = async (body) => {
  return OrderCreated.create(body);
};
const createCancelled = async (body) => {
  return OrderCancelled.create(body);
};
const createExchange = async (body) => {
  return OrderExchanged.create(body);
};

const updateOrderById = async (userId, updateBody) => {
  return  OrderCreated.findOneAndUpdate(userId, updateBody)
};


const getAllOrder = async (model) => {
  return OrderCreated.find();
};
const getAllCancelled = async (model) => {
  return OrderCancelled.find();
};
const getAllExchanged = async (model) => {
  return OrderExchanged.find();
};

module.exports = {
  getAllExchanged,
  getAllCancelled,
  getAllOrder,
  createExchange,
  createCancelled,
  createOrder,
  updateOrderById
};
