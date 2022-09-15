import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
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
            <Link to="/">Hotelverse.</Link>
          </h2>
        </div>
        <div className="navbar">
          <Link to="/">Tienda</Link>
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