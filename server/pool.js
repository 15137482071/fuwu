//引入mysql模块
const mysql = require("mysql");
//创建连接池对象
const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "hlg",
    connectionLimit: "20",
    charset: "utf8"
});
module.exports = pool;