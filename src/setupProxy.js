const proxy = require('http-proxy-middleware')

module.exports=(app)=>{
	app.use('/api',proxy({
		target:'http://localhost:3010',
		changeOrigin:true,
		secure:true,
		pathRewrite:{
			'^/api':''
		},
		cookieDomainRewrite:'http://localhost:3010'
	}))
}

// const proxy = require('http-proxy-middleware')

// module.exports=function(app){
// 	app.use('/lee',proxy({
// 		target:'http://127.0.0.1:9000',
// 		secure:true,
// 		changeOrigin:true,
// 		pathRewrite:{
// 			'^/lee':''
// 		},
// 		'cookieDomainRewrite':'http://127.0.0.1:9000'
// 	}))
// }