import './App.css';
import { Routes, Route } from 'react-router';

import Header from './components/Header'
import Nav from './components/Nav';

import Login from './components/Login';
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import Error404 from './components/Error404';

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
          <Route path='/articles/:article_id' element={<Article />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
