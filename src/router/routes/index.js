import Login from '../../view/Login'
import Regist from '../../view/Regist'

// const routes = [
// 	{path:'/',exact:true,render(){ return <Login /> }},
// 	{path:'/Login',exact:true,render(){ return <Login /> }},
// 	{path:'/Regist',exact:true,render(){ return <Regist /> }}
// ]
const routes = [
	{path:'/',exact:true,component:Login},
	{path:'/Login',exact:true,component:Login},
	{path:'/Regist',exact:true,component:Regist}
]



export default routes