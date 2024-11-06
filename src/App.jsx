import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBarContainer/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App ()
{
    return(<>
    <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route  path="/" element={ <ItemListContainer titulo="Productos"/>}/>
                <Route path="/category/:categoryId:" element={<ItemListContainer/>}/>
                <Route path="*" element={<h1>Not found 404</h1>}/>
            </Routes>

    </BrowserRouter>
    </>
    )
}
export default App;
