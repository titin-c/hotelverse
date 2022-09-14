import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

import SideCart from "../cart/SideCart";
import { useContext, useEffect, useState } from "react";



const Product = () => {
    const value = useContext(DataContext);
    const addCart = value.addCart;
    const [productos] = value.productos;
    const [detalle,setDetalle] = useState([]);
    const params = useParams();

    useEffect(()=>{
        productos.forEach(producto=>{
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        })
    },[params.id, productos])


    return (
        <>
            <SideCart />
            
            <div className="product-container">
                <div className="product-image-container">
                    <img src={detalle.image} width="300px" height="300px" alt="" className="product-image" />
                </div>
                <div className="product-info-container">
                <div className="breadcrumbs">
                    <a href="/">Volver</a> | {detalle.category}  
                    </div>
                    <h1>{detalle.title}</h1>
                    <p>{detalle.description}</p>
                   <hr></hr>

                    <div><button className="btn btn-success"
                    onClick={() => addCart(detalle.id)}
                    ><span className='price'>{detalle.price}<span className='currency'>€</span></span> Comprar</button></div>
                </div>
            </div>
        </>
    )

}

export default Product;