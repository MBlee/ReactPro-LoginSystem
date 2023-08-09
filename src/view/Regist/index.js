import React, { PureComponent } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {toRegist} from '../../store/actions'
import RegistForm from './RegistForm'

class Regist extends PureComponent {
	componentDidMount(){
	}
	render() {
		return (
			<div className="Regist jumbotron">
				<RegistForm submit={this.props.submit} />
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		submit:bindActionCreators(toRegist,dispatch)
	}
}
// const mapDispatchToProps = (dispatch)=>{
// 	return {
// 		submit:(data)=>{
// 			dispatch(toRegist(data))
// 		}
// 	}
// }
export default connect(null,mapDispatchToProps)(Regist)
