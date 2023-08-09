import routes from './routes'

import React, { PureComponent } from 'react';

import {Route,Switch} from 'react-router-dom'

export const links = [
	{pathname:'/Login',name:"登录"},
	{pathname:'/Regist',name:"注册"}
]


export default class Routes extends PureComponent {
	render() {
		return (
			<Switch>
				{
					routes.map((route,index)=>{
						return (
								<Route {...route} key={index}></Route>
							)
					})
				}
			</Switch>
		);
	}
}
