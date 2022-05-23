import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './Pages/Homepage';
import { Inventory } from './Pages/Inventory';
import { useState, useEffect } from 'react';
import { EditProduct } from './Components/EditProduct';
import { Cart } from './Pages/Cart';

function App() {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])

  const showData = (data) => {
    setProducts(data)
  }

  // Cart
  const [cartArr, setCartArr] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  const [count, setCount] = useState(0)

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
    setCount(count - 1)
  }

  // Filter
  //size
  const [filterSize, setFilterSize] = useState(null)

  const ChangeSize = (e) => {
    setFilterSize(e.target.value)
  }

  //search
  const [search, setSearch] = useState("")

  const GetSearchValue = (e) => {
    setSearch(e.target.value)
  }

  const UpdateProduct = () => {

    if(search === "" && filterSize === null){
      return products;
    } else {
      setProducts(products.filter((product) => product.proName.toLowerCase().includes(search.toLowerCase())))
      setProducts(products.filter((product) => product.proSize == filterSize))
    }
  }

  // Delete
  const DeleteProduct = (id) => {
    setProducts(products.filter((item) => item.proId !== id))
  }


  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }, [products, cartArr]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage products={products} DeleteProduct={DeleteProduct} AddCart={AddCart} GetSearchValue={GetSearchValue} count={count} UpdateProduct={UpdateProduct} ChangeSize={ChangeSize} />}></Route>

        <Route path="/inventory" element={<Inventory showData={showData} count={count} />}></Route>

        <Route path="/cart" element={<Cart cartArr={cartArr} DeleteCartItem={DeleteCartItem} count={count} />}></Route>

        <Route path="/pro/:id" element={<EditProduct products={products} />} />
      </Routes>


    </div>
  );
}

export default App;
