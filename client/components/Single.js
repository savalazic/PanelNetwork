import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comment from './Comment';
import Logout from './Logout';

class Single extends React.Component {

	render() {

		// index of the post
		const i = this.props.posts.findIndex(post => post.code === this.props.params.postId);
		console.log(i);
		// get us the post
		const post = this.props.posts[i];
		console.log(post);

		const postComments = this.props.comments[this.props.params.postId] || []; // empty array if no comments

		return (
			<div>
				<Logout />
				<div className="single-photo">
					<Photo i={i} post={post} {...this.props} />
					<Comment postComments={postComments} {...this.props}/> {/*pass this.props data into Comment component*/}
				</div>
			</div>
		);
	}

}

export default Single;