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

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => setData(data))
            // .then(json => console.log(json))
            .catch(console.log);
    }, [])

    const addCart = (id) => {
        const checkId = cart.every(item => {
            return item.id !== id;
        })
        if (checkId) {
            const datas = data.filter(producto => {
                return producto.id === id
            })
            setCart([...cart, ...datas])

        }
        else {
            alert("Ese producto ya existe")
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
      const getTotal = () =>{
        const set = cart.reduce((prev, item) =>{
            return prev + (item.price * item.cantidad)
        },0)
        return
      }
      getTotal()
    }, [cart])
    


    const value = {
        productos: [data],
        menu: [menu, setMenu],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}

