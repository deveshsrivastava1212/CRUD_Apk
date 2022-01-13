const mongoose = require("mongoose")

try{
const conn = mongoose.connect("mongodb+srv://Devesh:123qwe@cluster0.6rpwh.mongodb.net/UserManagement?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`Database connection successful`)
})
}catch(err){
    console.log(`Database failed`)
}

module.exports;