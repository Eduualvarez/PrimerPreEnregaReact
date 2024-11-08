import { ItemList } from "./ItemList/ItemList";
import { getProducts, getProductsByCategoryId } from "../../../asyncMock";
import { useState, useEffect,  } from "react";
import { useParams } from "react-router-dom";



export function ItemListContainer()
{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()
        useEffect(()=>{
            const asyncProducts = categoryId ? getProductsByCategoryId : getProducts
            asyncProducts(categoryId)
           .then(data=>setProducts(data))


        },[categoryId]);

            return (<>
       
        <ul>
            <ItemList products={products}/>
        </ul>    
    </>)
};
