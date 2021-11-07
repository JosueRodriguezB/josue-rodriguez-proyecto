import mysql from 'mysql2'

const cnn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_DATABASE
})

cnn.connect(err => {
    if (err) {
        console.log(`${err}`)
        return
    }

    console.log(`Connected to database ${process.env.DB_DATABASE}`)
})

export default cnn