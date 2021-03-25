//引入express模块
const express = require("express");
//引入连接池
const pool = require("../pool.js");
//创建路由
const router = express.Router();
//全部商品接口
router.get("/detail", (request, response) => {
    let table = []

    pool.query("select * from product_deta", (error, result) => {
        if (error) throw error;
        console.log(result);
        table.push(result)
        response.send(table)
        console.log(result);
    })
})

router.get("/list", (request, response) => {
    let table = []

    pool.query("select * from shouye", (error, result) => {
        if (error) throw error;
        table.push(result)
        response.send(table)
        console.log(result);
    })
})


module.exports = router