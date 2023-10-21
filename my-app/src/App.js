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
            user: 'Тасболат',
            title: 'Тур жәйлі',
            body:'О, тур туралы сөйлесейік! Сіз көне тас көшелермен серуендеп жатсаңыз, асқақ тауларға серуендесеңіз немесе ' +
                'өз қалаңыздағы жергілікті жерлерді зерттесеңіз, шытырман оқиға рухында сиқырлы нәрсе бар. Турлар - бұл жердің ' +
                'жүрегіне саяхат, оның жасырын оқиғаларын ашу және дірілге сіңу мүмкіндігі. Сонымен, армандаған жеріңіз қайда? ' +
                'Сіз тарихи орындардың әуесқойысыз ба, әлде жолдан тыс зерттеушісіз бе? Тур туралы ертегілеріңізбен бөлісіңіз! ' +
                '🌍✨ #Кездесуқұмарлығы #Өміргесаяхат',
            date:"10.10.2023, 01:01:01"
        },
        {
            id:2,
            user: 'Bob',
            title: 'Thoughts about UFO',
            body:'Ah, UFOs—the stuff of both conspiracy theories and sci-fi dreams. The universe is vast, and the idea that we\'re ' +
                'not alone in it is pretty mind-boggling. Whether you\'re a skeptic or a believer, the mystery of unidentified ' +
                'flying objects adds a dash of intrigue to our earthly existence. Do you think we\'ve had close encounters, ' +
                'or is it all just a play of light and shadows? Share your thoughts on the cosmic unknown! 👽🛸 ' +
                '#UFOmysteries #GalacticWonderings',
            date:"10.10.2023, 01:01:01"
        },
        {
            id:3,
            user: 'Anton',
            title: 'Мелочи нужны для счастья',
            body:'Охватите красоту маленьких моментов сегодня. ☕️✨ Будь то первый глоток утреннего кофе или взгляд на закат, давайте ' +
                'праздновать те простые радости, которые делают жизнь необыкновенной. Иногда речь идет не о величественных жестах, ' +
                'а о тихих, питающих душу переживаниях, которые добавляют красок нашим дням. Какая ваша любимая «мелочь», которая ' +
                'всегда поднимает вам настроение? Поделись радостью! 🌈 #ПростыеРадости #LifeInDetails',
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
