import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { body } = this.props;
        return (
            <div className="comment-card2">
                <div className="card-body1">
                    <strong>Chad</strong><br />{body}
                </div>
            </div>
        );
    }
}

export default Comment;
