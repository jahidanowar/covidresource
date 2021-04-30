const bcrypt = require('bcrypt');
const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");

/*
*/
exports.register =catchAsync(async (req, res, next) =>{
    const email = req.body.email ;
    const username = req.body.username;
    const password = req.body.password ;
    const hash = await bcrypt.hash(password , 10);

    const user = new User({
        email:email,
        username: username,
        password:hash
    });
    
    const register = await user.save();
    res.status(201).json({message:'Registered!', data: register});
});

/*
*/
exports.login = catchAsync(async (req, res, next) =>{
    const email = req.body.email ;
    const password = req.body.password ;

    const user = await User.findOne({email : email});
    const match = await bcrypt.compare(password, user.password);
    if(match){
        res.status(200).json({message:'Login successfull !'});
    }
    
});