import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../context/DataProvider"

export const Item = ({ title, price, image, category, id }) => {

    const value = useContext(DataContext);

    const addCart = value.addCart;

    return (
        <div className="list-item">
            <div className="item-container">
                <div className="item-image">
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={title} width="100" height="100" />
                    </Link>
                </div>
                <div className="item-content">
                    <span className='item-category'><i>{category}</i></span>
                    <h3 className='item-title'>{title}</h3>

                </div>
                <div className="item-buttons">
                    <Link to={`/product/${id}`} className='btn '>Ver detalles</Link>
                    <button className='btn btn-primary'
                        onClick={() => addCart(id)}>
                        <span className='price'>{price}<span className='currency'>€</span></span> Comprar</button>
                </div>
            </div>
        </div>
    )
}
