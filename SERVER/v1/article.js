/*
 article模块的接口
 具体接口名称请根据文档要求命名
 参数名务必和数据库字段名一致！！！
*/
const express = require('express');
const pool = require('../pool.js');
const r = express.Router();

// 文章列表查询
/*
    接口使用形势： - GET
    http://localhost:8000/article/list
*/
r.get('/list', (req, res) => {
    pool.queryAll({
        empt: 'article_category',
        callback(rs) {
            res.send({ rs });
        }
    })
});

// 首页文章分类数据查询
r.get('/category', (req, res) => {
    let sql = 'select id,typename,img1,img2,img3,bigimg,ctitle,csubtitle,count(*) as amount from article_category inner join article on article_typeid=id GROUP BY id';
    pool.objPool.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send(result);
    })
});


// 文章分类列表查询
r.get('/categorylist', (req, res) => {
    let category = req.query;
    console.log(category);
    let sql = 'select title,subtitle,img,created_at,view,likes,comment,nickname,bigimg,ctitle,csubtitle,avater,aid from article inner join user on author_id=uid inner join article_category on id=article_typeid where id=?';
    pool.objPool.query(sql, [category.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});


// 最新文章列表查询

r.get('/newArticle', (req, res) => {
    // 获取客户端传递的page参数
    let page = req.query.page;
    console.log(page)
    // 存储每页显示的记录数
    let pagesize = 6;

    // 通过公式来计算从第几条记录开始返回
    let offset = (page - 1) * pagesize;

    // 用于存储获取到的总记录数
    let rowcount;

    // 获取指定分类下的文章总数
    let sql = 'SELECT COUNT(aid) AS count FROM article';
    pool.objPool.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        // 将获取到总记录数赋给rowcount变量
        rowcount = result[0].count;

        // 根据总记录数和每页显示的记录数来计算总页数
        let pagecount = Math.ceil(rowcount / pagesize);

        let sql1 = 'select aid,title,subtitle,img,created_at,view,likes,comment,nickname,avater from article inner join user on author_id=uid order by created_at asc LIMIT ?,?';
        pool.objPool.query(sql1, [offset, pagesize], (err, result) => {
            if (err) throw err;
            res.send({ message: 'ok', code: 200, result: result, pagecount: pagecount });
            console.log(result)
        })
    })
});

// 文章详情查询
/*
    接口使用形势： - GET
    http://localhost:8000/article/detail
*/
// r.get('/detail',(req,res) =>{
//     pool.queryAll({
//         empt:'article',
//         callback(rs){
//             res.send({rs});
//         }
//     })
// });


r.get('/detail', (req, res) => {
    let detail = req.query;
    console.log(detail);
    let sql = 'select * from article where aid=? order by created_at asc';
    pool.objPool.query(sql, [detail.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

// 文章删除
/*
    接口使用形势： - GET
    http://localhost:8000/article/delete?aid=1
*/
r.get('/delete', (req, res) => {
    var obj = req.query;
    pool.del('article', obj, rs => {
        res.send({ rs });
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
r.post('/add', (req, res) => {
    var art = req.body;
    pool.insert('article', art, rs => {
        res.send({ code: 200, rs });
    });
});







// 导出路由器
module.exports = r;