import { Route, Routes } from 'react-router-dom'
import './App.css'
import BuyPage from './pages/BuyPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/buy' element={<BuyPage />} />
    </Routes>
  )
}

export default App
