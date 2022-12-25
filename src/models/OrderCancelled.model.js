const mongoose=require("mongoose");
const { toJSON, paginate } = require('./plugins');
const OrderCancelledSchema=mongoose.Schema({
  person:{
    type:String
  },
  Oid:{
    type:String
  },
date:{
  type:Date,
  default:Date.now
},
  
})

OrderCancelledSchema.plugin(toJSON);
OrderCancelledSchema.plugin(paginate);

module.exports=mongoose.model('OrderCancelled',OrderCancelledSchema)