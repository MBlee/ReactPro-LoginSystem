import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import classNames from 'classnames'
class RegistForm extends Component {
	constructor(){
		super()
		this.state={
			username:'',
			email:'',
			password:'',
			confirmPassword:'',
			errs:{},
			isLoading:false
		}
	}
	onChange=(e)=>{

		this.setState({
			[e.target.name]:e.target.value
		})
		
	}

	onSubmit=(e)=>{
		e.preventDefault()

		this.setState({
			isLoading:true
		})

		const {errs,isLoading,...data}=this.state

		this.props.submit(data).then(res=>{

			this.setState({
				isLoading:false
			})

			this.props.history.push('/',res.data)

		},err=>{

			this.setState({
				errs:err.response.data,
				isLoading:false
			})

		})
	}

	render() {
		const { errs } = this.state
		return (
			<div className='RegistForm col-md-6 col-sm-12 mx-auto'>
				<form onSubmit={this.onSubmit} noValidate>
					<h3 className='text-center font-weight-bolder'>注册</h3>
					<div className="form-group">
						<label htmlFor="">用户名</label>
						<input name='username' value={this.state.username} onChange={this.onChange} type="text" className={classNames("form-control",{'is-invalid':errs.username})} autoComplete='off' required/>
						{
							errs.username?
							<small 
								className='invalid-feedback' >{errs.username}
							</small>
							:""
						}
						
					</div>	
					<div className="form-group">
						<label htmlFor="">邮箱</label>
						<input name='email' value={this.state.email} onChange={this.onChange}  type="email" className={classNames("form-control",{'is-invalid':errs.email})}   autoComplete='off' required/>
						{
							errs.email?
							<small 
								className='invalid-feedback' >{errs.email}
							</small>
							:""
						}						
					</div>	
					<div className="form-group">
						<label htmlFor="">密码</label>
						<input name='password' value={this.state.password} onChange={this.onChange}  type="password" className={classNames("form-control",{'is-invalid':errs.password})}   autoComplete='off' required/>
						{
							errs.password?
							<small 
								className='invalid-feedback' >{errs.password}
							</small>
							:""
						}		
					</div>	
					<div className="form-group">
						<label htmlFor="">确认密码</label>
						<input name='confirmPassword' value={this.state.confirmPassword} onChange={this.onChange}  type="password" className={classNames("form-control",{'is-invalid':errs.confirmPassword})}   autoComplete='off' required/>
						{
							errs.confirmPassword?
							<small 
								className='invalid-feedback' >{errs.confirmPassword}
							</small>
							:""
						}								
					</div>	
					<div className="submit">
						<button type='submit' className='btn btn-primary col-3' disabled={this.state.isLoading}>提交</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(RegistForm)