import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();

export const DataProvider = (props) => {

    const [data, setData] = useState([]);
    // gestionamos la visibilidad del carrito side
    const [menu, setMenu] = useState(true);
    // estado del contenido del carrito
    const [cart, setCart] = useState([]);
    // estado del total del carrito
    const [total, setTotal] = useState(0);

    const [loading, setLoading] = useState(false);
    

    const fetchproducts = async () => {
        setLoading(true);
        const req = await fetch(`https://fakestoreapi.com/products`);
        const data = await req.json();
        setData(data);
        setLoading(false);
      }
      useEffect(() => {
        fetchproducts();
      }, []);




    //para añadir al carrito comprobamos si ya existe
    const addCart = (id) => {
        const checkId = cart.every(item => {
            return item.id !== id;
        })
        if (checkId) {
            const datas = data.filter(producto => {
                return producto.id === id
            })
            //y si no existe lo añadimos
            setCart([...cart, ...datas])

        }
        else {
            alert("Ese producto ya existe");
        }


    }

    //para guardar local storage primero comprobamos
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));

        if (dataCart) {
            setCart(dataCart)
        }
    }, [])
    //luego guardamos cada vez que carrito se modifica
    useEffect(() => {

        //aquí he hecho esta chapuza...porque no sé porque se me borraba el carrito del localstorage
        if (cart.length >= 1) {
            localStorage.setItem("dataCart", JSON.stringify(cart));
        }
    }, [cart])

    useEffect(() => {
        // const getTotal = () => {
        //     const setTotal = cart.reduce((prev, item) => {
        //         console.log(item.price)
        //         return prev + (item.price);
                
        //     }, 0)
        //     return
        // }
        // getTotal()
        const getTotal = () => {
        const setTotal = cart.reduce((prev, item) => prev + parseInt(item.price), 0);
        
        console.log(total);
    }
     getTotal()

    }, [cart])
    

    //Exporto los valores para pasarselos a todos los hijos con provider
    const value = {
        productos: [data],
        menu: [menu, setMenu],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal],
        loading: [loading, setLoading]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}

