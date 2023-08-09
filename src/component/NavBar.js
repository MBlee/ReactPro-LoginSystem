import React, { Component } from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom'
import {links} from '../router'
class NavBar extends Component {
	render() {
		console.log();
		const {location} = this.props
		return (
			<div>
				<nav className='NavBar navbar navbar-light bg-dark justify-content-start'>
					{
						links.map(({name,pathname},index)=>{
							return (
									<Link to={pathname}
									 className='nav-link active text-info col-3'
									 key={index}>{name}</Link>
								)
						})
					}
				</nav>
				<nav aria-label='breadcrumb'>
					<ol className="breadcrumb mb-1">
				    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
				    <li className="breadcrumb-item active" aria-current="page">{location.pathname.substr(1)}</li>
					</ol>
				</nav>
			</div>
		);
	}
}
export default withRouter(NavBar)