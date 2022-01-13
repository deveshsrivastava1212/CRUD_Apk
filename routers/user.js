const express = require("express");
const {User} = require('../models/users');

const router = express.Router();

router.post('/login', async(req,res) => {
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
})

router.post('/signup', async(req,res) => {
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
})

router.get('/all', async(req,res) => {
    try {
        const allUser = await User.populate({
            
        })
    } catch (err) {
        
    }
})

module.exports = router;