
// hook que nos permite buscar os ids dos produtos
import { useParams } from 'react-router-dom';
function Produto() {

    const { id } = useParams();
    // estamos querendo receber um id do nosso paramentro da rota
    // o useParams identifica qualquer número depois do produto/ e coloca o id para retornar na nossa tela
    return (
        <div>
            <h2>PÁGINA DETALHE DO PRODUTO</h2>
            {/* vamos mostrar o nosso id agora */}
            {/* vamos ver se consigo ter acesso ao que o usuário digitou na url */}
            <span>MEU PRODUTO É {id}</span>

            
        </div>
    )
}

export default Produto;