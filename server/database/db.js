
import mongoose from "mongoose";
export const Connection =async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-ufzoz1k-shard-00-00.ykod8ry.mongodb.net:27017,ac-ufzoz1k-shard-00-01.ykod8ry.mongodb.net:27017,ac-ufzoz1k-shard-00-02.ykod8ry.mongodb.net:27017/?ssl=true&replicaSet=atlas-bscmh9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("DataBase connected Successfully");
        //  firt argument -> url
        //  second argument -> object (video 49:13   2/9)
    }catch(error)    
    {
        console.log(`Error while connecting database`,error.message);
    }
}

export default Connection;
