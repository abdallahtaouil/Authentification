const mongoose=require('mongoose');
const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://abdallah:mongoosepass2024@cluster0.npcrumc.mongodb.net/?retryWrites=true&w=majority')
        console.log('Data base is connected')
    } catch (error) {
        if (error) throw error
    }
}
module.exports=connectDb