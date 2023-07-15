const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_app"
})

db.connect((error) => {
    if(error) {
        console.log(error)
        return
    }

    console.log('Connected')
})

module.exports = db
