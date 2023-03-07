import './App.css';

// 1- configurando react routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// páginas:
import Home from './pages/Home'
import Formacao from './pages/Formacao';
import Detalhe from './pages/Detalhe';
import NotFound from './pages/NotFound';
import Contatos from './pages/Contatos';

// componentes:
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
      <h1>Mariana Faustino</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/perfil' element={<Home/>}/>
        <Route path='/formacao' element={<Formacao/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/formacao/:id' element={<Detalhe/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
