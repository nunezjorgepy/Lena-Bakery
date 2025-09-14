import { Route, Routes } from 'react-router-dom';
import './App.css';

import BuyPage from './pages/BuyPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import CatalogoPage from './pages/CatalogoPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/buy' element={<BuyPage />} />
      <Route path='/catalogo' element={<CatalogoPage />} />
      <Route path='/faq' element={<FAQPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default App
