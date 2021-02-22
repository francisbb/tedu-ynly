/*
 main 模块
*/

const express=require('express');
const bodyParser=require('body-parser');
// 引入模块
const userRouter=require('./v1/user.js');
const articleRouter=require('./v1/article.js');
const ucenterRouter=require('./v1/ucenter.js')

/*引入token的模块*/
const jwt=require("./jwt.js")


const app=express();
app.listen(8090,() => console.log('server is running...'));

// 针对post请求，在主模块下使用body-parser模块，再到其它模块下req.body获取数据
// 往后只要使用中间件来修改req对象的模块，都可以这么写，不是针对body-parser一个模块应用场景
app.use(bodyParser.urlencoded({
	extended:false
}));

// 静态文件托管
// app.use(express.static('./public'));

// 挂载接口模块
app.use('/user',userRouter);
app.use('/article',articleRouter);
app.use('/ucenter',ucenterRouter);


