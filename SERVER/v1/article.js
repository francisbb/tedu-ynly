/*
 article模块的接口
 具体接口名称请根据文档要求命名
*/
const express=require('express');
const pool=require('../pool.js');
const r=express.Router();

// 文章列表查询
r.get('/list',(req,res) =>{
    pool.queryAll({
        empt:'article_category',
        callback(rs){
            res.send({rs});
        }
    })
});

// 文章详情查询
r.get('/detail',(req,res) =>{
    pool.queryAll({
        empt:'article',
        callback(rs){
            res.send({rs});
        }
    })
});

// 文章删除
r.get('/delete',(req,res) =>{
    var obj=req.query;
    pool.del('article',obj,rs=>{
        res.send({rs});
    });
});

// 文章添加
r.post('/add',(req,res) =>{
    var art=req.body;
    pool.insert('article',art,rs =>{
        res.send({code:200,rs});
    });
});


// 导出路由器
module.exports=r;