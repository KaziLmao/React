import React from 'react';
import DeleteButton from "./UI/buttons/DeleteButton";
import GradePost from "./GradePost";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <GradePost/>
            </div>
            <div className="post__btns">
                <DeleteButton onClick={() => props.remove(props.post)}>
                    Удалить
                </DeleteButton>
            </div>
        </div>
    );
};

export default PostItem;