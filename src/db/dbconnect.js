const mongoose=require('mongoose');

const connectDB=async(DATABASE_URL)=>{
    try {
        const databasecreate={
            dbname:'College'
        }
     await mongoose.connect(DATABASE_URL,databasecreate)
        console.log("Connection successfully!")
    } catch (error) {
        console.log(error)
    }
    
}

module.exports=connectDB

