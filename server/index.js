const express = require('express')
const app = require('express')()

const router = require('./router/user')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('',router)

app.listen(3010,()=>{
	console.log('服务器启动成功');
})