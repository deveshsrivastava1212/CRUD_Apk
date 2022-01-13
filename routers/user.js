const express = require("express");
const userController = require("../controllers/userController")

const router = express.Router();

//POST router to login the user
router.post('/login', userController.login)

//POST router to sign up the user
router.post('/signup', userController.signup)

//GET router to see all the user
router.get('/all', userController.all)

//DELETE router to delete the user profile
router.delete('/delete/:id', userController.delete)

//PUT router to update the user profile
router.put('/update/:id', userController.update)

module.exports = router;