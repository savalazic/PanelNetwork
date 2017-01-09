import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import AddPost from './AddPost';
import Logout from './Logout';

class PhotoGrid extends React.Component {

	render() {
		return (
			<div>
				<Logout />
				<div className="add-photo">
					<AddPost />
				</div>

				<div className="photo-grid">
					{this.props.posts.map((post, i) => <Photo key={i} i={i} {...this.props} post={post} />)}
				</div>
			</div>
		);
	}

}

export default PhotoGrid;