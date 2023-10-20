import React, {useEffect, useState} from 'react';
import MainInput from "./UI/inputs/MainInput";
import MainButton from "./UI/buttons/MainButton";
import BigInput from "./UI/inputs/BigInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const [currTime, setCurrTime] = useState(new Date());

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(), date: currTime.toLocaleString()
        };
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form className="form-container">
            <MainInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <BigInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MainButton onClick={addNewPost}>Создать пост</MainButton>
        </form>
    );
};

export default PostForm;