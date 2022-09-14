import { useContext } from "react";
import { Item } from "./Item";
import { DataContext } from "../context/DataProvider";




const ListItems = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;

    
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/category/jewelery')
    //         .then(res => res.json())
    //         .then((data) => setData(data))
    //         .then(json => console.log(json))
    //         .catch(console.log);
    // }, [])

      
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