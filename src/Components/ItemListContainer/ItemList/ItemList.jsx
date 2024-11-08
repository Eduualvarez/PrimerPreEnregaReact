import { Item } from "./Item/Item";

export function ItemList({products})
{

    
    return(
    <>
         {products.map( product => <Item key={product.id} product={product} />)}


    
        
    </>
    )
    
}