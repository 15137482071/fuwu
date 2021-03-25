//引入express
const express = require('express');
//引入连接池
const pool = require('../pool.js');
//创建路由
const router = express.Router();
//添加路由
//注册
router.post('/reg', (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    pool.query("select COUNT(eid) as count from user where username=? and password=md5(?)", [username, password], (error, result) => {
        if (error) throw error;
        let count = result[0].count;
        if (count == 0) {
            pool.query("insert into user(username,password) value(?,md5(?))", [username, password], (error, result) => {
                if (error) throw error;
                response.send({ message: 'ok', code: 200 });
            })
        } else {
            response.send({ message: 'user exists', code: 201 });
        }
    });
})
//登录
router.post("/login", (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    pool.query("select username,password from user where username=? and password=md5(?)", [username, password], (error, result) => {
        if (error) throw error;
        if (result.length == 0) {
            response.send({ message: "login failed", code: 201 });
            console.log("0")
        } else {
            response.send({ message: "OK", code: 200, result: result[0] });
            console.log("1")
        }
    })
})
module.exports = router;