import { useContext } from "react";
import { Item } from "./Item";
import { DataContext } from "../context/DataProvider";




const ListItems = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;

    

      
    return (
        productos && productos.length > 0 ?
            <div className="list-container">
                {productos.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        category={item.category}
                        image={item.image}

                    />))}
            </div> : (<span>Cargando...</span>)
    )

}

export default ListItems;