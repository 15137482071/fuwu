//引如express
const express = require('express');
//引入CORS模块
const cors = require("cors");
//引入body parser 中间件
const bodyParser = require('body-parser');
//引入用户路由
const userRouter = require('./router/user.js');
//引入商品路由
const detaRouter = require('./router/details.js');
//加载md5模块
const md5 = require("md5");


//创建web服务器
const app = express();
//设置端口
app.listen(3000, () => {
    console.log("成功")
});
//应用body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
//使用CORS中间件
app.use(cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"]
}));
//挂载用户路由
app.use("/user", userRouter);
//挂载商品路由
app.use("/deta", detaRouter);