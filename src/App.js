import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Form from './components/form/Form'
import Favorites from './components/favorites/Favorites'

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "admin@gmail.com";
  const password = "1234"
  const [myFavorites, setMyFavorites] =useState([]);

  function login(userData) {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function logout(){
    setAccess(false);
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]); // Guardo la información en mi estado
        } else {
            window.alert('No hay personajes con ese ID');
        }
      }
    );
  }
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      </div>

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} myFavorites={myFavorites} onClose={onClose} /> } />
        <Route path='/favorites' element={ <Favorites myFavorites={myFavorites} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={ <Detail /> } />
      </Routes>
    </div>
  )
}

export default App
