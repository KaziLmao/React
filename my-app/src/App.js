import { useState } from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MainButton from "./components/UI/buttons/MainButton";
import MainInput from "./components/UI/inputs/MainInput";
import PostForm from "./components/PostForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [posts, setPosts] = useState([
        {
            id:1,
            title: 'What about TOUR?',
            body:'Oh, let\'s talk about tours! Whether you\'re wandering through ancient ' +
                'cobblestone streets, hiking up majestic mountains, or just exploring the local spots in your own town, ' +
                'there\'s something magical about the spirit of adventure. Tours are like a journey into the heart of ' +
                'a place, a chance to uncover its hidden stories and soak in the vibes. So, where\'s your dream destination? ' +
                'Are you more of a historical landmarks enthusiast or an off-the-beaten-path explorer? Share your tour tales! ' +
                '🌍✨ #Wanderlust #TourLife',
            date:"10.10.2023, 01:01:01"
        },
        {
            id:2,
            title: 'thoughts about UFO',
            body:'Ah, UFOs—the stuff of both conspiracy theories and sci-fi dreams. The universe is vast, and the idea that we\'re ' +
                'not alone in it is pretty mind-boggling. Whether you\'re a skeptic or a believer, the mystery of unidentified ' +
                'flying objects adds a dash of intrigue to our earthly existence. Do you think we\'ve had close encounters, ' +
                'or is it all just a play of light and shadows? Share your thoughts on the cosmic unknown! 👽🛸 ' +
                '#UFOmysteries #GalacticWonderings',
            date:"10.10.2023, 01:01:01"
        },
        {
            id:3,
            title: 'little things is the to be happy',
            body:'Embracing the beauty of small moments today. ☕️✨ Whether it\'s the first sip of your morning coffee or catching ' +
                'a glimpse of a sunset, let\'s celebrate those simple joys that make life extraordinary. Sometimes, it\'s not about ' +
                'the grand gestures but the quiet, soul-nourishing experiences that add color to our days. What\'s your favorite ' +
                '"little thing" that never fails to brighten your mood? Share the joy! 🌈 #SimpleJoys #LifeInDetails',
            date:"10.10.2023, 01:01:01"
        },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <Header/>
            <div className="content-container">
                <PostForm create={createPost}/>
                <PostList remove={removePost} posts={posts} title={"Посты @Юзера"}/>
            </div>
            <Footer/>
        </div>
  );
}

export default App;
