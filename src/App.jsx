import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBarContainer/NavBar";


function App ()
{
    return(<>
    <NavBar/>
    <ItemListContainer greetings="listado de Productos"/>
    </>
    )
}
export default App;
