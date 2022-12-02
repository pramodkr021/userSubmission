const Form = require("../models/form")
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.create = async (req, res) => {
    try{
        const password = await bcrypt.hash(req.body.password, saltRounds)
        const data = {...req.body, password}
        const user = await Form.create(data)
        res.status(201).json(user);
    }
    catch(err){
        res.status(404).json(err.errors)
    }
}

exports.fetch = async(req,res)=>{
    try {
        const login_user = await Form.findOne({email: req.body.email})
        if(!login_user){
            res.status(404).json({"user" : "Incorrect email or user does not exist"})
            return
        }
        if(!(await bcrypt.compare(req.body.password,login_user.password))){
            res.status(401).json({"user":"Wrong password"})
            return
        }else{
            if(login_user.role ==="admin"){
                const data = await Form.find()
                res.status(200).json({data})
            }
            else{
                console.log("User is not admin")
                res.status(401).json("Admin rights needed")
            }
        }
    } catch (err) {
        res.status(404).json(err.errors)
    }
}