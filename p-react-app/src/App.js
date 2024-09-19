import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Categories from './Categories';
import Products from './Products';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<Products />} />
      <Route path="/categories/:categoryId/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
