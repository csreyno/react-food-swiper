import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import CommentAdd from './CommentAdd';
import Comment from './Comment';

// add <CommentGroup/> below each recipe on render so comments show up below each recipe
class CommentGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {id: 1, body: 'This is my first comment'},
                {id: 2, body: 'This is my second comment'}

            ]
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(data) {
        console.log('handleCommentSubmit', data);
        const postData = {
            comment: data
        };
        axios.post('/api/comment/save', postData).then((response) => {
            console.log('response', response.data);
            let comments = this.state.comments;
            //unshift will add new comment to start of arraay
            comments.unshift({
                id: comments.length + 1,
                body: response.data.comment
            });
            this.setState({ comments: comments });
        });
    }
    renderComments() {
        const { comments } = this.state;
        return comments.map(comment => {
            const { id, body } = comment;
            return (
                <Comment key={id} body={body}/>
            );
        })
    }
    render() {
        return (
            <div className="comments-component">
                {this.renderComments()}
                <CommentAdd handleCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

export default CommentGroup;

//need to add "div Id" 'comments-wrapper'  to relevant portion of recipe page to add comment to each recipe 
if (document.getElementById('comments-wrapper')) {
    ReactDom.render(<CommentGroup />, document.getElementById('comments-wrapper'))
}