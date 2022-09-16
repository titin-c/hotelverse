import SideCart from './cart/SideCart';

import { useContext,  useState } from 'react';

import { DataContext } from "../context/DataProvider";
import { Item } from './Item';
import { BiSearch } from 'react-icons/bi';

const Home = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const [loading] = value.loading;

    const [search, setSearch] = useState('');

    const  handleSearch = e => {
        
        setSearch(e.target.value);
    }
    
    


    const filteredProducts = productos.filter(product =>
        product.category.toLowerCase().includes(search.toLowerCase()) || product.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            <SideCart />

            <div className='filtros-container'>
            <div className="form-group search-form">
                    <label  htmlFor="search">Buscar:</label>
                <span className='search-icon'><BiSearch /></span>
                    <input placeholder="Busca en el título o categoría..." onChange={handleSearch} id="search" className="form-control" />
                    
                </div>

            </div>
            <div className='container'>

                <div className="list-container">
                    {!loading && filteredProducts ? filteredProducts.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            image={item.image}

                        />)) : (

                        "Cargando..."

                    )}
                </div>
            </div>
        </>
    )
}

export default Home;