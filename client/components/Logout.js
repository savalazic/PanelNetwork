import React from 'react';
import * as Redux from 'react-redux';
import * as actions from '../actions/actionCreators';

export var Logout = React.createClass ({

	onLogout(e) {
		e.preventDefault();
		var { dispatch } = this.props;
		dispatch(actions.startLogout());
	},
	
	render() {
		return (
			<div className="logout-action">
				<a href="#" onClick={this.onLogout}>Logout</a>
			</div>
		);
	}
});

export default Redux.connect()(Logout);