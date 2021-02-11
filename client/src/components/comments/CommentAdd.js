import React, { useState } from 'react';
import "../App.css";

function CommentAdd(props) {

    const { handleCommentSubmit } = props;
    // let comment = '';
    const [comment, setComment] = useState('');

    return (
        <div>
            <div className="comments-body">
                <div className="card-header"><strong>Comments</strong></div>
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new comment" 
                        onChange={event => setComment(event.target.value)} value={comment}></textarea>
                </div>    
                <div>
                <button className="comments-button" onClick={event => {
                    handleCommentSubmit(comment);
                    setComment('');
                }}>Submit Comment</button>
            </div>
            </div>
        
        </div>
       
    );
}

export default CommentAdd;