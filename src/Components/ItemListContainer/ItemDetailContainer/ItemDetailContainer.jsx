import { useParams} from "react-router-dom";

import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../../../asyncMock";

const ItemDetailContainer = ()=>{

    
    const [product, setProduct] = useState({});
  const {productId}=useParams()
  
    
    console.log({productId})

    useEffect(()=>{

       getProductsById(productId).then(product=>setProduct(product))
        
    },[productId])

    return(
        <>
        <ItemDetail prod={product}/>
        </>
    )
}
export default ItemDetailContainer