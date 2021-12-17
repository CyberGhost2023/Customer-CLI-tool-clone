const mongoose=require("mongoose")

//Customer Schema
const customerSchema = new mongoose.Schema({
    firstName:{ type:String},
    lastName:{type:String},
    phone:{type:String},
    email:{type:String}
})

// define and export
module.exports=mongoose.model('customer',customerSchema);