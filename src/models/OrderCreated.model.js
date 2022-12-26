const { boolean } = require("joi");
const mongoose=require("mongoose");
const { toJSON, paginate } = require('./plugins');
const OrderCreatedSchema=mongoose.Schema({
  Oid:{
    type:String
  },
  orderType:{
    type:String
  },
  tokenA:{
    type:String
  },
  tokenB:{
    type:String
  },
  baseAmount:{
    type:String
  },
  quoteAmount:{
    type:String
  },
  tx:{
    type:String
  },
  creator:{type:String},
date:{
  type:Date,
  default:Date.now
},
  
})
OrderCreatedSchema.plugin(toJSON);
OrderCreatedSchema.plugin(paginate);

module.exports=mongoose.model('OrderCreated',OrderCreatedSchema)