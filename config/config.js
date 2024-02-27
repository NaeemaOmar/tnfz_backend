import mysql from 'mysql2' 
import {config} from 'dotenv'

config();

export default {
    pool: mysql.createPool({
        host: process.env.MYSQL_ADDON_HOST,
        password: process.env.MYSQL_ADDON_PASSWORD,
        database: process.env.MYSQL_ADDON_DB,
        user: process.env.MYSQL_ADDON_USER,
        connectionLimit: 30
    }).promise()
}
 
