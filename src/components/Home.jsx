import SideCart from './cart/SideCart';
import ListItems from './ListItems';

const Home = () => {
    return (
        <>
        <SideCart />
           
        <div className='filtros-container'>Filtrar:</div>
        <div className='container'>
         
            <ListItems />
        </div>
        </>
            )
}
            export default Home;