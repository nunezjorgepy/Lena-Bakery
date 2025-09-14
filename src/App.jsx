import { Route, Routes } from 'react-router-dom';
import './App.css';

import BuyPage from './pages/BuyPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/ContactPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/buy' element={<BuyPage />} />
      <Route path='/faq' element={<FAQPage />} />
    </Routes>
  )
}

export default App
