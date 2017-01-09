import firebase, { firebaseRef } from '../firebase/index';

// add post
export function addPost (display_src, caption) {
	console.log('Dispatching add post');
	return {
		type: 'ADD_POST',
		display_src: display_src,
		caption: caption,
	}
}

// increment
export function increment (index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}

// add comment 
export function addComment (postId, author, comment) {
	console.log('Dispatching add comment');
	return {
		type: 'ADD_COMMENT',
		postId: postId,
		author: author,
		comment: comment
	}
}

// remove comment
export function removeComment (postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i: i,
		postId: postId
	}
}

export var startAddTodo = (text) => {
	return (dispatch, getState) => {

	};
};