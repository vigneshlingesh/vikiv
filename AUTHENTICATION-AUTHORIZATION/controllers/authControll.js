const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) =>{
    try {
    
        const{username, password} =req.body;

        let user = await User.findOne({username});

        if(user){
            return res.status(400).json({msg:"User already Exists"});
            
        }

        user = new User({username,password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.status(201).json({msg:"User Registerd Successfully."});
        
    } catch (error) {
        confirm.error(error.message);
        res.status(500).send("server Error");
        
    }
};

exports.login = async (req, res) =>{
    try {
    
        const{username, password} =req.body;

        let user = await User.findOne({username});

        if(!user){
            return res.status(400).json({msg:"Username or Password Incorrct"});
            
        }

        const isMath = await bcrypt.compare(password, user.password);
        if(!isMath){
            return res.status(400).json({msg:"Username or Password Incorrct"})
        }

        user = new User({username,password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.status(201).json({msg:"User Registerd Successfully."});
        
    } catch (error) {
        confirm.error(error.message);
        res.status(500).send("server Error");
        
    }
};