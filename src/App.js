import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Nav, Login, Home, Article, Articles, Error404} from './components/index';

function App() {
 
  return (
    <div>
      <header>
        <Header />
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/topic/:topic' element={<Articles />} /> 
          <Route path='/articles/:article_id' element={<Article />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
