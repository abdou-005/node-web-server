var db = require('./db');

module.exports.handelSignup  = (email, password)=>{
    // Chek if email already exists
    // save the user to the database
        // db.saveUser({
        //     email: email,
        //     password: password
        // });
        db.saveUser({email, password});/// ES6 syntax
    //Send the welcome email
};