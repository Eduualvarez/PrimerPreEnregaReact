import "./Item.css"
import { Link } from "react-router-dom"

export function Item({product})
{
  return (
  
    <div >
       <h1>{product.name}</h1>
       <img id="imagenItem" src={product.img}/>
       <p>{`$${product.price}`}</p>
       <p>{`Stock: ${product.stock}`}</p>
       <button type="subbmit">Agregar al carrito</button>
       <Link to={`detail/${product.id}`}>Ver en detalle</Link>
       </div>
  
  )  
};


