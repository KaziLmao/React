import React from 'react';
import DeleteButton from "./UI/buttons/DeleteButton";
import GradePost from "./GradePost";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__title">
                    <span>{props.number}. {props.post.user}</span>
                    <strong>{props.post.title}</strong>
                    <span>{props.post.date}</span>
                </div>
                <div className="post__body">
                    <span>{props.post.body}</span>
                </div>
                <GradePost/>
            </div>
            <div className="post__btns">
                <DeleteButton onClick={() => props.remove(props.post)}>
                    ❌
                </DeleteButton>
            </div>
        </div>
    );
};

export default PostItem;