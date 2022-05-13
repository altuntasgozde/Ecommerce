import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './Pages/Homepage';
import { Inventory } from './Pages/Inventory';
import { useState, useEffect } from 'react';
import { EditProduct } from './Components/EditProduct';
import { Cart } from './Pages/Cart';

function App() {

  const [products, setProducts] = useState([])

  const [cartArr, setCartArr] = useState([])

  const [count, setCount] = useState(0)

  const showData = (data) => {
    setProducts(data)
  }

  const DeleteProduct = (id) => {
    setProducts(products.filter((item) => item.proId !== id))
  }

  const AddCart = (id) => {
    if (cartArr.some(item => item.proId == id)) {
      cartArr.filter(item => item.proId == id).map(item => {
        return (
          item.count++
        )
      })
    } else {
      const newItem = products.filter(item => item.proId == id)
      setCartArr((oldArray) => [...oldArray, newItem[0]])
      setCount(count + 1)
    }
  }

  const DeleteCartItem = (id) => {
    console.log(cartArr)
    setCartArr(cartArr.filter(item => item.proId !== id))
    setCount(count-1)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage products={products} DeleteProduct={DeleteProduct} AddCart={AddCart} count={count} />}></Route>

        <Route path="/inventory" element={<Inventory showData={showData} />}></Route>

        <Route path="/cart" element={<Cart cartArr={cartArr} DeleteCartItem={DeleteCartItem}/>}></Route>

        <Route path="/pro/:id" element={<EditProduct products={products} />} />
      </Routes>


    </div>
  );
}

export default App;
