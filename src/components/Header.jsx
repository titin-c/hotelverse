import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;

  const handleToogleCart = () => {
    setMenu(!menu)
  }
  const handleFalseCart = () => {
    setMenu(false)
  }

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <h2>
            <Link onClick={handleFalseCart} to="/" >Hotelverse.</Link>
          </h2>
        </div>
        <div className="navbar">
          <Link onClick={handleFalseCart} to="/">Tienda</Link>
          <div className="cart-icon-menu"
            onClick={handleToogleCart}
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