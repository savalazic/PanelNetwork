import React from 'react';
import * as Redux from 'react-redux';

import * as actions from '../actions/actionCreators';

export var Login = React.createClass({

	onLogin() {
		var { dispatch } = this.props;
		dispatch(actions.startLogin());
	},
	
	render() {
		return (
			<div className="login-box">
				<h2>Login</h2>
				<p>Login with your social account</p>
				<button className="btn-facebook" onClick={this.onLogin}>Login with Facebook</button>
			</div>
		);
	}
});

export default Redux.connect()(Login);