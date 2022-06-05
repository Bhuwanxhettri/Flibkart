import mongoose from "mongoose";


//  this is validation before inserting database
const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String

});

// creating a databsae collection
const Product = mongoose.model('product',productSchema);

export default Product;