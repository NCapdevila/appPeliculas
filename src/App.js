import style from './App.module.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
    <Router>
      <header>
       <Link to='/'>
        <h1 className={style.textoTitulo}>Movies</h1>
      </Link> 
      </header>
      <main>
        <Routes>
          <Route path='/movies/:movieId' element={<MovieDetails />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
