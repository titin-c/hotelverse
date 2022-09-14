import React, { useContext } from 'react';
import CartContent from './CartContent';
import {DataContext} from "../../context/DataProvider"

const SideCart = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;

    const toogleTrue =()=>{
        setMenu(true);
    }
    const styleBg = menu ? "cart-bg off" : "cart-bg ";
    const styleCart = menu ? "cart-container off" : "cart-container";

    return (
        <>
            {/* Capa que se oscurece al cargar el carrito del side */}
            <div
                onClick={toogleTrue}
                className={styleBg }
            >
            </div>
            {/* Carrito del side */}
            <div className={styleCart }>
                <div className='cart-header'>
                    <h4>Carrito de la compra</h4>
                    {/* boton que cierra el carrito del side con un personal hook */}
                    <button className="btn-cerrar"
                        onClick={toogleTrue}
                    >
                        x
                    </button>
                </div>
                <CartContent />


            </div>

        </>
    )
}
export default SideCart;