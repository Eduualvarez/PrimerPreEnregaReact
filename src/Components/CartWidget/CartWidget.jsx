import "./CartWidget.css"



function Carrito (){
    return (<>
        <label ><span id="cartTitle">Carrito</span><button >&#9660;</button></label>
        <input  id ="cartNotification" value="0" disabled/>
    </>)
}
export default Carrito;