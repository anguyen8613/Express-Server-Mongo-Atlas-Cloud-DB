const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');

const route = express.Router();

route.post('/', async(req, res) => {
    try {
        const {firstName, lastName} = req.body;
        let user = {};
        user.firstName = firstName;
        user.lastName = lastName;
        let userModel = new User(user);
        await userModel.save();
        res.json(userModel)
    }catch (e) {
        console.log(e);
    }
})

module.exports = route;