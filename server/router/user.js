// 3010/toRegist
const router = require('express').Router()

const isEmpty = require('lodash/isEmpty')
const validator = require('validator')

const confirmEmpty = (data)=>{
	const err ={}
	if (validator.isEmpty(data.username)) {
		err.username = '请输入用户名'
	}
	if (!validator.isEmail(data.email)) {
		err.email = '请输入正确的邮箱'
	}
	if (validator.isEmpty(data.password)) {
		err.password = '请输入密码'
	}
	if (validator.isEmpty(data.confirmPassword)) {
		err.confirmPassword = '请输入确认密码'
	}
	if (!validator.equals(data.password,data.confirmPassword)) {
		err.confirmPassword = '密码不一致'
	}

	return {
		err,isValid:isEmpty(err)
	}
}

router.post('/toRegist',(req,res)=>{
	const {err,isValid} = confirmEmpty(req.body.data)
	if (!isValid) {
		res.status(400).json(err)
	}else{
		res.status(200).json(req.body.data)
	}

	// res.send(isEmpty(req.body))
})

module.exports = router