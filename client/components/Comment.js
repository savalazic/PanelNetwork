import React, { Component } from 'react';

class Comment extends Component {

	renderComment(comment, i) {
		console.log(comment);

		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
				</p>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('submiting form');

		const postId = this.props.params.postId;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		console.log(postId, author, comment);

		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}

	render() {
		return (
			<div className="comments">
				{this.props.postComments.map(this.renderComment.bind(this))}
				<form onSubmit={this.handleSubmit.bind(this)} ref="commentForm" className="comment-form">
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
}

export default Comment;