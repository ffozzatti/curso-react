import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search';


//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/*2 - links com react router */}
        <Navbar />
        {/* 9 - serch */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4- Rota Dinamica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - serch */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          {/* 6- nested route*/}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 7 - no match route*/}
          <Route path="*" element={<NotFound />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
