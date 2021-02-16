/*
 用户模块的接口
 具体接口名称请根据文档要求命名
*/
const express=require('express');
const pool=require('../pool.js');
const r=express.Router();

// 用户注册
r.post('/reg',(req,res) =>{
    var user=req.body;
    // sql='INSERT user set ?'
    // pool.objPool.query(sql,[user],(err,rs) =>{
    //     if(err) throw err;
    //     res.send({code:200,rs});
    // })
    pool.insert('user',user,rs =>{
        res.send({code:200,rs});
    });
})

// 用户登陆
r.post('/login',(req,res) =>{
    var user=req.body;
    pool.query({
        empt:'user',
        obj:{uname:user.uname},
        callback(rs){
            if(!rs.length){ // 如果rs.length==0 则为false、取反为true
                res.send({code:301,msg:'authentication faild'});
            }else{
                res.send({code:200,msg:'login sucess'}); // 注意：这里可以不带return，因为if-else始终只有一个结果出来
            }
        }
    });
})
// 导出路由器
module.exports=r;