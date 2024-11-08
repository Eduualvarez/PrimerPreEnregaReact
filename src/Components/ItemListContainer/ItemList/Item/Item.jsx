import "./Item.css"
import { Link } from "react-router-dom"

export function Item({product})
{
  console.log(product)
  return (
  
    <div className="card">
       <h1>{product.name}</h1>
       <img id="imagenItem" src={product.img}/>
       <p>{`$${product.price}`}</p>
       <p>{`Stock: ${product.stock}`}</p>
       <button type="subbmit">Agregar al carrito</button>
       
       </div>
    
  )  
};


