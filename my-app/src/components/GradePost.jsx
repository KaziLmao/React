import React, { useState } from 'react';
import '../styles/Grade.css';
import MainButton from "./UI/buttons/MainButton";
import DeleteButton from "./UI/buttons/DeleteButton";
const GradePost = function () {
    const [likes, setLikes] = useState(1);
    const [dislikes, setDislikes] = useState(2);
    const [isLiked, setIsLiked] = useState(null);

    const handleLike = () => {
        if (isLiked === null) {
            setLikes(likes + 1);
            setIsLiked('like');
        } else if(isLiked === 'like') {
            setIsLiked(null);
            setLikes(likes - 1);
        } else {
            setDislikes(dislikes - 1);
            setLikes(likes + 1);
            setIsLiked('like');
        }
    };

    const handleDisLike = () => {
        if (isLiked === null) {
            setDislikes(dislikes + 1);
            setIsLiked('dislike');
        } else if(isLiked === 'dislike') {
            setIsLiked(null);
            setDislikes(dislikes - 1);
        } else {
            setDislikes(dislikes + 1);
            setLikes(likes - 1);
            setIsLiked('dislike');
        }
    };

    return (
        <div className="grading-container">
            <div className="likes-container">
                <h1 className="grading-title">{likes}</h1>
                <MainButton className="gradeBtn like-btn" onClick={handleLike}>
                    👍
                </MainButton>
            </div>
            <div className="dislikes-container">
                <h1 className="grading-title">{dislikes}</h1>
                <DeleteButton className="gradeBtn dislike-btn" onClick={handleDisLike}>
                    👎
                </DeleteButton>
            </div>
        </div>
    )
}

export default GradePost