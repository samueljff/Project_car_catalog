import './styles.css';
const BuscarButton = () => {
    return (
        <div className="btn-buscar-container base-card-main-product">
            <div className="btn-buscar-left">
                <input type="text" id='btn-id' placeholder='Digite sua busca'/>
            </div>
            <div className="btn-buscar-right">
                <button id='btn-id'>BUSCAR</button>
            </div>
        </div>
    );
}

export default BuscarButton;