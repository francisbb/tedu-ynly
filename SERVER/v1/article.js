/*
 article模块的接口
 具体接口名称请根据文档要求命名
 参数名务必和数据库字段名一致！！！
*/
const express=require('express');
const pool=require('../pool.js');
const r=express.Router();

// 文章列表查询
/*
    接口使用形势： - GET
    http://localhost:8000/article/list
*/
r.get('/list',(req,res) =>{
    pool.queryAll({
        empt:'article_category',
        callback(rs){
            res.send({rs});
        }
    })
});

// 文章详情查询
/*
    接口使用形势： - GET
    http://localhost:8000/article/detail
*/
r.get('/detail',(req,res) =>{
    pool.queryAll({
        empt:'article',
        callback(rs){
            res.send({rs});
        }
    })
});

// 文章删除
/*
    接口使用形势： - GET
    http://localhost:8000/article/delete?aid=1
*/
r.get('/delete',(req,res) =>{
    var obj=req.query;
    pool.del('article',obj,rs=>{
        res.send({rs});
    });
});

// 文章添加
/*
    接口使用形势： - POST
    http://localhost:8000/article/add
    body --> x-www-from-urlencoded{
        aid:30,
        article_typeid:25,
        title:'我要成为海贼王的男人',
        subtitle:海贼王,
        content:'多看海贼王就完事了，玩什么玩？',
        img:'default',
        author_id:5
    }
*/
r.post('/add',(req,res) =>{
    var art=req.body;
    pool.insert('article',art,rs =>{
        res.send({code:200,rs});
    });
});


// 导出路由器
module.exports=r;