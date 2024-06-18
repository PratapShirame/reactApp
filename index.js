import mongoose from 'mongoose';
import app from './app.js'; 

( async()=> {
    try {
        await mongoose.connect("mongodb://localhost:27017/gitsetup");
            console.log("DB CONNECTED");

            const onLinsning = ()=> {
                console.log("Lisnniong on PORT 5000");
            }
            app.listen(5000, onLinsning);

    } catch (error) {
        console.error("Error :", error);
        throw err;
        
    }

})();