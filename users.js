const db = require('./db')
import jwt from 'jsonwebtoken'


exports.createUser = (firstname, lastname, email, password, confirmPassword) => {
    const sql = 'INSERT INTO users (first_name,last_name,email,password,confirmPassword) VALUES (?,?,?)';
    const values =[
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.confirmPassword,
    ]


    db.query(sql, [firstname,lastname,email], (error, result) => {
        if(error) {
            return error
        }


        return true;
    })

}


