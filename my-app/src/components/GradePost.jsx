import React, { useState } from 'react';
import '../styles/Grade.css';
import MainButton from "./UI/buttons/MainButton";
import DeleteButton from "./UI/buttons/DeleteButton";
const GradePost = function () {
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);
    const isActive= false;

    const handleLike = () => {
        !isLiked ? setLikes(likes + 1) : setLikes(likes - 1);
        setIsLiked(!isLiked);
    };

    const handleDisLike = () => {
        !isDisLiked ? setDisLikes(disLikes - 1) : setDisLikes(disLikes + 1);
        setIsDisLiked(!isDisLiked);
    };

    return (
        <div className="grading-container">
            <div className="likes-container">
                <h1 className="grading-title">{likes}</h1>
                <MainButton className="gradeBtn like-btn" onClick={isDisLiked === true ? console.log("disliked") : handleLike}>
                    👍
                </MainButton>
            </div>
            <div className="dislikes-container">
                <h1 className="grading-title">{disLikes}</h1>
                <DeleteButton className="gradeBtn dislike-btn" onClick={isLiked === true ? console.log() : handleDisLike}>
                    👎
                </DeleteButton>
            </div>
        </div>
    )
}

export default GradePost