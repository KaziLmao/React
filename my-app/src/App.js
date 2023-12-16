import {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MainButton from "./components/UI/buttons/MainButton";
import MainInput from "./components/UI/inputs/MainInput";
import PostForm from "./components/PostForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <Header/>
            <div className="content-container">
                <MainButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                    Создать пост
                </MainButton>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <hr style={{margin: '15px 0'}}/>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты @Юзера"}/>
            </div>
            <Footer/>
        </div>
  );
}

export default App;
