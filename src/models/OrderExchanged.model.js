const mongoose=require("mongoose");
const { toJSON, paginate } = require('./plugins');
const OrderExchangedSchema=mongoose.Schema({
    buyer:{
    type:String
  },
  seller:{
    type:String
  },
  Oid:{
    type:String
  },
  bamount:{
    type:String
  },
  quoteAmout:{
    type:String
  },
date:{
  type:Date,
  default:Date.now
},
  
})
OrderExchangedSchema.plugin(toJSON);
OrderExchangedSchema.plugin(paginate);

module.exports=mongoose.model('OrderExchanged',OrderExchangedSchema)