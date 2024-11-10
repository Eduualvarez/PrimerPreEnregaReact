import { Item } from "./Item/Item";
import "./ItemList.css"
export function ItemList({products})
{

    
    return(
    <div className="ListContainer">
        {products.map( product => <Item key={product.id} product={product} />)}
    </div>
        
    )
    
}