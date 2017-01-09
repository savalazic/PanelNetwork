import React from 'react';

class Login extends React.Component {
	
	render() {
		return (
			<div className="login-box">
				<h2>Login</h2>
				<p>Login with your social account</p>
				<button className="btn-facebook">Login with Facebook</button>
			</div>
		);
	}
}

export default Login;