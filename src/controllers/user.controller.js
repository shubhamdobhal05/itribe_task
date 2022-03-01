
const express = require("express");

const sendMail = require("../utils/sendMail")



const User = require("../models/user.model")

const router = express.Router();




router.get("", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    const offset = (page -1) * size;
    const user = await User.find().skip(offset).limit(size).lean().exec();

    const totalUserCount = await User.find();

    

    sendMail({
        from: "shubhamdobhal05@gmail.com",
        to: "shubhamdobhal05@gmail.com",
        subject: "Welcome ",
        text: "Hi Shubham confirm your email",
        html: "<h1>hi, Shubham please confirm your email</h1>"
      
    })

    return res.send(user);
})


module.exports = router