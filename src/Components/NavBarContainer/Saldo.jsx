import "./Saldo.css"


function Saldo (props){
    const {SaldoActual}=props;

    return (
    
    <>

        <a href="#"><span className="saldo">Saldo</span></a>
        <input id="showSaldo" value={SaldoActual} disabled/>
    
    </>);
};
export default Saldo;