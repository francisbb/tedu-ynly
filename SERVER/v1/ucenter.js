/*
 ucenter模块的接口
 具体接口名称请根据文档要求命名
*/
const express=require('express');
const pool=require('../pool.js');
const r=express.Router();

// 评论添加
r.post('/addComment',(req,res) =>{
    var comm=req.body;
    pool.insert('article_comment',comm,rs =>{
        res.send({code:200,rs});
    });
});

// 评论删除
r.get('/delComment',(req,res) =>{
    var obj=req.query;
    pool.del('article_comment',obj,rs=>{
        res.send({rs});
    });
});

// 用户评论列表
r.get('/commentList',(req,res) =>{
    pool.queryAll({
        empt:'article_comment',
        callback(rs){
            res.send({rs});
        }
    })
});

// 用户收藏列表
r.get('/favorite',(req,res) =>{
    pool.queryAll({
        empt:'favorite',
        callback(rs){
            res.send({rs});
        }
    })
});

// 添加收藏列表
r.post('/addFavorite',(req,res) =>{
    var comm=req.body;
    pool.insert('favorite',comm,rs =>{
        res.send({code:200,rs});
    });
});

// 用户修改密码
r.post('/changePassword',(req,res) =>{
    var user=req.body;
    var sql='INSERT INTO user WHERE uname=? AND upwd=?';
    pool.objPool.query(sql,[user.uname,user.upwd],(err,rs) =>{
        if(err) throw err;
        res.send({rs});
    });
});

// 用户信息检索,根据uid来查询
r.get('/userinfo',(req,res) =>{
    var user=req.query;
    pool.query({
        empt:'user',
        obj:{uname:user.uid},
        callback(rs){
            res.send({rs});
        }
    });
});

// 修改用户
r.post('/updateUserinfo',(req,res) =>{
    var user=req.body;
    var sql='UPDATE user set ?'
    pool.objPool.query(sql,[user],(err,rs) =>{
        if(err) throw err;
        res.send({rs});
    });
});
// 导出路由器
module.exports=r;