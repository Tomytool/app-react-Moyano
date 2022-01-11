import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const [stock, setStock] = useState(0);
  return (
    <div className="App">
      <NavBar valorCompra={stock} />
      <ItemListContainer carritoStock={setStock} />
    </div>
  );
}

export default App;
