import {useEffect, useMemo, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MainButton from "./components/UI/buttons/MainButton";
import PostForm from "./components/PostForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPagesCount} from "./utils/pages";
import {usePagination} from "./hooks/usePagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    let pagesArray = usePagination(totalPages);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts();
    }, []);

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
                <div className="post-form">
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <MyModal visible={modal} setVisible={setModal}>
                        <PostForm create={createPost}/>
                    </MyModal>
                    <div className="add-post-btn">
                        <MainButton onClick={() => setModal(true)}>
                            Создать пост
                        </MainButton>
                    </div>
                </div>
                {postError &&
                    <h1>Произошла ошибка ${postError}</h1>
                }
                {isPostsLoading
                    ? <div className="loader-div"><Loader/></div>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Лента постов"}/>
                }
                <div className="pages-div">
                    {pagesArray.map(p =>
                        <span className={page === p ? 'page page-current' : 'page'}>
                            {p}
                        </span>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
  );
}

export default App;
