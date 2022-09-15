import SideCart from './cart/SideCart';

import { useContext, useState } from 'react';

import { DataContext } from "../context/DataProvider";
import { Item } from './Item';

const Home = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const [loading] = value.loading;

    const [search, setSearch] = useState('');
  
    
  
    const handleSearch = e => {
      setSearch(e.target.value);
    }

  
    const filteredProducts = productos.filter(product => 
          product.category.toLowerCase().includes(search.toLowerCase()) || product.title.toLowerCase().includes(search.toLowerCase())
      );






    return (
        <>
        <SideCart />
           
        <div className='filtros-container'>
            Buscar:   

            <input placeholder="Busca en el título o categoría" onChange={handleSearch} />
            {/* <Link to="/"  className='filter-btn active'><BiSortAZ /></Link> 
            <Link to="/" className='filter-btn'><BiSortZA /></Link> */}
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