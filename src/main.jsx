import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { ProductProviderWrapper } from './context/product.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProviderWrapper>
  </StrictMode>,
)
