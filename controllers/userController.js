const {User} = require("../Models/users")

//Login
exports.login = async(req,res) => {
    try {
        const detail = req.body;
        const userDetail = await User.findOne({email : detail.email})
        if(!userDetail){
            res.status(404).json({"message": "User not exist!"})
        }
        if(detail.password === userDetail.password){
            res.status(200).json({"message": "Login successfully"})
        }
        else{
            res.status(200).json({"message": "Invalid Credentials"})
        }
    } catch (err) {
        res.status(404).send("OOps Something went wrong!")
        console.log(err);
    }
}

//Signup
exports.signup = async(req,res) => {
    try {
        let user = await User.findOne({email: req.body.email})
        if(user){
            res.status(200).json({"message": "User account already exist"})
        }
        user = new User(req.body);
        await user.save();
        res.status(201).json({"message": "Signup Successfully"})
    } catch (err) {
        res.status(404).send("OOps Something went wrong!")
        console.log(err);
    }
}

//all user
exports.all = async(req,res) => {
    try {
        const allUser = await User.find({
            isUser: true
        })
        res.status(200).send(allUser);
    } catch (err) {
        res.status(404).send("OOps Something went wrong!")
        console.log(err);
    }
}

//delete user profile
exports.delete = async(req,res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        if(!user){
            res.status(200).json({"message": "User is unavailable"})
        }
        await User.findByIdAndDelete({
            _id : req.params.id
        })
        res.status(200).json({"message": "Record deleted successfully"})
        
    } catch (err) {
        res.status(404).send("OOps Something went wrong!")
        console.log(err);
    }
}

exports.update = async(req,res)=>{
    try {
        const user = await User.findOne({ _id: req.params.id })
        if(!user){
            res.status(200).json({"message": "User is unavailable"})
        }
        await User.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
        )
        res.status(200).json({"message": "User Record Updated"})

    } catch (err) {
        res.status(404).send("OOps Something went wrong!")
        console.log(err);
    }
}