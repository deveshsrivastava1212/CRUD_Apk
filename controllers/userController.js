const { User } = require("../Models/users")
const jwt = require('jsonwebtoken');

//Login
exports.login = async (req, res) => {
    try {
        const detail = req.body;
        const user = await User.findOne({ email: detail.email })
        if (!user) {
            res.status(404).json({ "message": "User not exist!" })
        }
        if (detail.password === user.password) {
            const token = jwt.sign({ _id: user._id }, 'thisissecretkey', {expiresIn: '2m'});
            res.header('auth-token', token).json({"message":"Successfully login" ,"token":token })
        }
        else {
            res.status(200).json({ "message": "Invalid Credentials" })
        }
        
    } catch (err) {
        res.status(500).send("OOps Something went wrong!")
        console.log(err);
    }
}

//Signup
exports.signup = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(200).json({ "message": "User account already exist" })
        }
        user = new User(req.body);
        await user.save();
        res.status(201).json({ "message": "Signup Successfully" })
    } catch (err) {
        res.status(500).send("OOps Something went wrong!")
        console.log(err);
    }
}

//all user
exports.all = async (req, res) => {
    try {
        const allUser = await User.find({
            isUser: true
        })
        res.status(200).send(allUser);
    } catch (err) {
        res.status(500).send("OOps Something went wrong!")
        console.log(err);
    }
}

//add new user
exports.adduser = async (req,res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(200).json({ "message": "User account already exist" })
        }
        user = new User(req.body);
        await user.save();
        res.status(201).json({ "message": "You successfully added new user" })
    } catch (err) {
        res.status(500).send("OOps Something went wrong!")
        console.log(err);
    }
}

//delete user profile
exports.delete = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        if (!user) {
            res.status(200).json({ "message": "User is unavailable" })
        }
        await User.findByIdAndDelete({
            _id: req.params.id
        })
        res.status(200).json({ "message": "Record deleted successfully" })
    } catch (err) {
        res.status(500).send("OOps Something went wrong!")
        console.log(err);
    }
}

exports.update = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        if (!user) {
            res.status(200).json({ "message": "User is unavailable" })
        }
        await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
        )
        res.status(200).json({ "message": "User Record Updated" })

    } catch (err) {
        res.status(500).send("OOps Something went wrong!")
        console.log(err);
    }
}