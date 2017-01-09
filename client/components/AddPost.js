import React from 'react';

class AddPost extends React.Component {

	handlePhotoSubmit(e) {
		e.preventDefault();
		console.log('submiting form');

		// const postId = this.props.params.postId;
		const display_src = this.refs.display_src.value;
		const caption = this.refs.caption.value;
		console.log(display_src, caption);

		this.props.addPost(display_src, caption);
		this.refs.addPhotoForm.reset();
	}

	render() {
		return (
				<form onSubmit={this.handlePhotoSubmit.bind(this)} ref="addPhotoForm">
					<input type="text" ref="display_src" placeholder="Image link"/>
					<input type="text" ref="caption" placeholder="Image caption"/>
					<button type="submit">Post your photo!</button>
				</form>
		);
	}
}

export default AddPost;