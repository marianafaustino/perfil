import './App.css';

// 1- configurando react routes
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// páginas:
import Home from './pages/Home'
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

// componentes:
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
  {/* 2- links com react router */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
