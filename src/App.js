import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './Pages/Homepage';
import { Inventory } from './Pages/Inventory';
import { useState } from 'react';
import { EditProduct } from './Components/EditProduct';

function App() {

  const [products, setProducts] = useState([])

  const showData = (data) => {
    setProducts(data)
    console.log(data)
  }

  const DeleteProduct = (id) => {
    setProducts(products.filter((item) => item.proId !== id))
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage products={products} DeleteProduct={DeleteProduct} />}></Route>
      </Routes>
      <Routes>
        <Route path="/inventory" element={<Inventory showData={showData} />}></Route>
      </Routes>
      <Routes>
        <Route path="/pro/:id" element={<EditProduct products={products}/>} />
      </Routes>


    </div>
  );
}

export default App;
