import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../context/DataProvider";

const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;

  const toogleCart = () => {
    setMenu(!menu)
  }

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <h2>
            <a href="/">Hotelverse.</a>
          </h2>
        </div>
        <div className="navbar">
          <a href="/">Tienda</a>
          <div className="cart-icon-menu"
            onClick={toogleCart}
          >
            <BiCart />
            <span className="item__total">{cart.length}</span>


          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;