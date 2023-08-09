import React, { PureComponent } from 'react';
import LoginForm from './LoginForm'
class Login extends PureComponent {
	componentDidMount(){
		console.log(this.props.location.state);
	}
	render() {
		return (
			<div className='Login jumbotron'>
				<LoginForm></LoginForm>
			</div>
		);
	}
}
export default Login