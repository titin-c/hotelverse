import SideCart from './cart/SideCart';
import ListItems from './ListItems';
import { BiSortZA,BiSortAZ } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <SideCart />
           
        <div className='filtros-container'>Filtrar:   <Link to="/"  className='filter-btn active'><BiSortAZ /></Link> <Link to="/" className='filter-btn'><BiSortZA /></Link></div>
        <div className='container'>
         
            <ListItems />
        </div>
        </>
            )
}
            export default Home;