
import { Link } from 'react-router-dom'
import './Productos.css'

function Productos(){
    return(
        <>
            <ul className="productsContainer">
                <li ><Link className ="productos"to ="/category/notebooks">Notebooks</Link></li>
                <li ><Link className ="productos" to="/category/celulares">Celulares</Link></li>
                <li ><Link className ="productos" to="/category/cables">Cables</Link></li>
                <li ><Link className ="productos" to="/category/tablets">Tablets</Link></li>
                <li ><Link className ="productos" to="/category/mouses">Mouses</Link></li>
            </ul>
        </>
    )
};
export default Productos;