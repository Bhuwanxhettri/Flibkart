import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";
const DefaultData =async()=>{
    // database is external entity so we use try or catch 😋
    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        //  insert , insertOne , save, insertMany
         console.log('Data imported Successfully');

    }catch(error){
        console.log('Error while inserting defalut data',error.message);
    }


}
export default DefaultData;