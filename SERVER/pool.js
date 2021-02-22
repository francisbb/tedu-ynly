/*
 mysql 连接池模块
*/

const mysql=require('mysql');

// 创建一个pool对象
// const pool=mysql.createPool({
// 	host:'212.64.79.16',
// 	user:'ynly',
// 	password:'code.org',
// 	port:32768,
// 	database:'YM',
// 	connectionLimit:20,
// 	charset:'utf8'
// });

const pool = mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'ym',
	connectionLimit:'20'//设置连接池的大小
});

// 不带条件查询
/*
   使用形式：
   	r.get('/test',(req,res) =>{
		pool.queryAll({
			empt:'my_empt',
			property:'*' // default value, super str and Array object
			callback(rs){
				console.log(rs);
			}
		});
	});
*/
function queryAll(
	{
		empt,
		property='*',
		callback=null
	}
){
	if(!empt.length){
		callback=null;
		console.log(null);
		return null;
	}else{
		var sql;
		if(property instanceof Array){
			var sql1='SELECT ';
			for(var i=0;i<property.length;i++){
				sql1+=`${property[i]},`
			}
			sql1=sql1.slice(0,-1);
			sql=sql1+` FROM ${empt}`;
		}else{
			sql=`SELECT ${property} FROM ${empt}`;
		}
		sql + ' ASC';
		console.log(sql);
		pool.query(sql,(err,rs) =>{
			if(err) throw err;
			callback(rs);
		});
	}
}

// 带条件查询
/*
   使用形式:
   r.get('/test',(req,res) =>{
		let obj=req.query;
		pool.query({
			empt:'my_empt',
			property:'*' // default value, super str and Array object
			obj:new Object()
			callback(rs){
				console.log(rs);
			}
		});
	});
*/
// function query(empt,obj,callback){
function query(
	{
		empt,
		property='*', // default value, super str and Array object
		obj=null,
		callback=null
	}
){
	if(!Object.keys(obj).length){
		callback=null;
		console.log(null);
		return null;
	}else{
		var sql;
		if(property instanceof Array){
			var sql1='SELECT ';
			for(var i=0;i<property.length;i++){
				sql1+=`${property[i]},`
			}
			sql1=sql1.slice(0,-1);
			sql=sql1+` FROM ${empt} WHERE `;
		}else{
			sql=`SELECT ${property} FROM ${empt} WHERE `;
		}
		// let sql=`SELECT * FROM ${empt} WHERE `;
		// console.log(sql);
		for(let n in obj){
			sql+=`${n}='${obj[n]}' and `;
		}
		sql=sql.slice(0,-4);
		console.log(sql);
		pool.query(sql,(err,rs) =>{
			if(err) throw err;
			callback(rs);
		});
	}	
}

// 插入
// 返回一个对象
/*
   使用形式：
    r.post('/test',(req,res) =>{
		let obj=req.body;
		pool.insert('xz_user',obj,rs=>{
			res.send(rs);
		});
	});
*/
function insert(empt,obj,callback){
	if(!Object.keys(obj).length){
		callback=null;
		console.log(null);
		return null;
	}else{
		let sql='INSERT INTO '+empt+' set ?';
		console.log(sql);
		pool.query(sql,[obj],(err,rs) =>{
			if(err) throw err;
			callback(rs);
		});
	}
}

// 删除
/*
   使用形式:
   r.get('/test',(req,res) =>{
		let obj=req.query;
		pool.del('xz_user',obj,rs=>{
			res.send(rs);
		});
	});
*/
function del(empt,obj,callback){
	if(!Object.keys(obj).length){
		callback=null;
		console.log(null);
		return null;
	}else{
		let sql=`DELETE FROM ${empt} WHERE `;
		for(let i in obj){
			sql+=`${i}='${obj[i]}' and `;
		}
		sql=sql.slice(0,-4);
		console.log(sql);
		pool.query(sql,(err,rs) =>{
			if(err) throw err;
			callback(rs);
		});
	}
}


// 导出对象
module.exports={
	objPool:pool,
	queryAll,
	query,
	insert,
	del
}

