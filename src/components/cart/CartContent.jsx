import { DataContext } from "../../context/DataProvider";
import {  BiTrash } from "react-icons/bi";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartContent = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [cartTotal] = value.cartTotal;

 

  //borrar producto del carrito
  const removeProducto = id => {
    
    if (window.confirm("¿Quieres borrar el producto?")) {
      cart.forEach((item, index) => {

        if (item.id === id) {
          item.cantidad = 1;
          cart.splice(index, 1)
        }

      })
      setCart([...cart])
    }
    
  }
  return (
    <>

      <div className='cart-body'>
      
        {
          
          cart.lenght  < 1 ?<h2>Carrito vacio</h2> :  <>
          {

            /* listado de productos del carrito */
            cart.map((producto) => (
              <div className='cart-item' key={producto.id}>
                <div className='cart-item-left'>
                  <img src={producto.image} alt={producto.title} className='cart-img' />
                  <div className="cart-item-name">{producto.title}</div>
                </div>
                <div className='cart-item-right'>
                  
                  <div>{producto.price}€</div>
                  <button className="btn-borrar"
                    onClick={() => removeProducto(producto.id)}
                  ><BiTrash /></button>
                </div>
              </div>
            ))
        }
        </>}
      </div>
      <div className="cart-total">{cartTotal}€</div>
      {/* botones para el chekout del carrito del side */}
      <div className='cart-footer'>
        <Link to="/cart" className="btn">Ver carrito</Link>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>

      </div>

    </>
  )
}

export default CartContent;