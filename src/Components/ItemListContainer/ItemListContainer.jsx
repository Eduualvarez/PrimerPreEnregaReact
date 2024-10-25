import { ItemList } from "./ItemList/ItemList";


export function ItemListContainer(props)
{
    return (<>
        <h1>{props.greetings}</h1>
        <ul>
            <ItemList/>
        </ul>    
    </>)
}