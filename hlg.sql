-- 设置客户端连接服务器端的编码
set names utf8;
-- 丢弃数据库如果存在
drop database if exists hlg;
-- 创建数据库
create database hlg charset=utf8;
-- 进入数据库
use hlg;
-- 创建商品列表
create table user(
    # id
    eid int primary key auto_increment,
    -- 用户名称
    uname  varchar(20) not null unique,
    -- 用户密码
    password  char(32) not null
);
insert into user values(1,'zhangsan',md5('123456789'));
create table product_deta(
   #id
    cid int primary key auto_increment,
    -- 价格
    price double,
    -- 商品名称
    detail varchar(32),
    -- 商品简介
    details varchar(100)
);
insert into product_deta values(1,4699,'小米11 12GB+256GB','骁龙888处理器；2K AMOLED四曲面柔性屏；一亿像素，哈曼卡顿高音质立体双扬声器');
create table product_list(
    #id
    mid int primary key auto_increment,
    -- 颜色
    color varchar(12),
    -- 运行内存
    ram varchar(12),
    -- 存储空间
    rom varchar(12),
    -- CPU型号
    CPU varchar(12),
    -- 屏幕尺寸
    screen varchar(12),
    -- 后置摄像头
    hcamera varchar(12),
    -- 后置主像素
    pixel varchar(20),
    -- 操作系统
    system varchar(32),
    -- 屏幕分辨率
    definition varchar(32),
    -- 屏幕刷新率
    refresh varchar(12)
);
    insert into product_list values(1,'烟紫色','12GB','256GB','骁龙888','6.81英寸','三摄','108MP','Android','2K','120Hz');
    insert into product_list values(2,'烟紫色','12GB','256GB','骁龙888','6.81英寸','三摄','108MP','Android','2K','120Hz');
    insert into product_list values(3,'烟紫色','12GB','256GB','骁龙888','6.81英寸','三摄','108MP','Android','2K','120Hz');
