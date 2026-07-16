import mongoose from "mongoose";
import { DB_NAME } from "../constant";

 export const DbConnect = async () => {

    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
                                    console.log(`DB CONNECTED SUCCESSFULLY 😜  DB HOST: 
                                        ${connectionInstance.connection.host}`);
                                            
    } catch (error) {
        
        console.log(`Db connection failed error is `,{error});
        process.exit(1);
    }
}

