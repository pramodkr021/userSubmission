const express = require('express');
const router = express.Router()
const userController = require('../controller/userController')


router.get('/', (req, res) => {
    res.status(200).send("Welcome to the demo assignment")
})

router.post('/register', userController.create)
router.post("/getuser", userController.fetch)

router.all("/*", (req,res)=>{
    res.status(404).render("404")
})

module.exports = router