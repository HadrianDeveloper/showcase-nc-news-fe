import './App.css';
import { Routes, Route } from 'react-router';
import { useContext } from 'react';
import { LoadingContext } from './contexts/Loading';

import Header from './components/Header'
import Nav from './components/Nav';
import Loading from './components/Loading';
import Login from './components/Login';
import Home from './components/Home';
import Articles from './components/Articles';
import NewsItem from './components/NewsItem';
import Error404 from './components/Error404';


function App() {
  
  const {loading, setLoading} = useContext(LoadingContext)
  
  return (
    <div>
      <Header />
      <Nav />

      <main>
      {loading && <Loading />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:article_id' element={<NewsItem />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    
      </main>
    </div>
  );
};

export default App;
