/*
 ucenter模块的接口
 具体接口名称请根据文档要求命名
 参数名务必和数据库字段名一致！！！
*/
const express=require('express');
const pool=require('../pool.js');
const r=express.Router();

// 评论添加
/*
    接口使用形势： - POST
    http://localhost:8000/ucenter/addComment
    body --> x-www-from-urlencoded{
        id:1,
        user_id:1,
        article_id:1,
        comment_content:22
    }
*/ 
r.post('/addComment',(req,res) =>{
    var comm=req.body;
    pool.insert('article_comment',comm,rs =>{
        res.send({code:200,rs});
    });
});

// 评论删除
/*
    接口使用形势：- GET
    1) 单个`WHERE`条件删除
    http://localhost:8000/ucenter/delComment?id=8
    2）多个`WHERE`条件删除
    http://localhost:8000/ucenter/delComment?id=7&user_id=5
*/
r.get('/delComment',(req,res) =>{
    var obj=req.query;
    pool.del('article_comment',obj,rs=>{
        res.send({rs});
    });
});

// 用户评论列表
/*
    接口使用形势： - GET
    http://localhost:8000/ucenter/commentList
*/
r.get('/commentList',(req,res) =>{
    pool.queryAll({
        empt:'article_comment',
        callback(rs){
            res.send({rs});
        }
    })
});


// 用户收藏列表
/*
    接口使用形势： - GET
    http://localhost:8000/ucenter/favorite
*/
r.get('/favorite',(req,res) =>{
    pool.queryAll({
        empt:'favorite',
        callback(rs){
            res.send({rs});
        }
    })
});

// 添加收藏列表
/*
    接口使用形势： - POST
    http://localhost:8000/ucenter/addFavorite
    body --> x-www-from-urlencoded{
        user_id:1,
        article_id:1
    }
*/ 
r.post('/addFavorite',(req,res) =>{
    var comm=req.body;
    pool.insert('favorite',comm,rs =>{
        res.send({code:200,rs});
    });
});

// 用户修改密码
/*
    接口使用形势： - POST
    http://localhost:8000/ucenter/changePassword
    body --> x-www-from-urlencoded{
        uname:dongge,
        upwd:12345678
    }
*/ 
r.post('/changePassword',(req,res) =>{
    var user=req.body;
    var sql='UPDATE user SET uname=?,password=? WHERE uname=?';
    pool.objPool.query(sql,[user.uname,user.upwd,user.uname],(err,rs) =>{
        if(err) throw err;
        res.send({rs});
    });
});

// 用户信息检索,根据uid来查询
/*
    接口使用形势： - GET
    http://localhost:8000/ucenter/userinfo?uid=1
*/
r.get('/userinfo',(req,res) =>{
    var user=req.query;
    pool.query({
        empt:'user',
        obj:{uid:user.uid},
        callback(rs){
            res.send({rs});
        }
    });
});

// 修改用户
/*
    接口使用形势： - POST
    http://localhost:8000/ucenter/updateUserinfo
    body --> x-www-from-urlencoded{
        uid:1,
        uname:dongdong,
        password:12345678,
        nickname:range,
        avater:'/imagePath'
    }
*/ 
r.post('/updateUserinfo',(req,res) =>{
    var user=req.body;
    var sql='UPDATE user set ? WHERE uid=?'
    pool.objPool.query(sql,[user,user.uid],(err,rs) =>{
        if(err) throw err;
        res.send({rs});
    });
});
// 导出路由器
module.exports=r;