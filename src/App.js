import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/product/Product";
import CartScreen from "./components/cart/CartScreen";
import CheckOut from "./components/checkout/CheckOut";

import { DataProvider} from "./context/DataProvider";

import Header from "./components/Header";



function App() {
 

  return (
    <div className="App">
      
      <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
