import { Link } from 'react-router-dom';
// aqui é pra gente poder navegar entre as páginas dentro dos componentes por meio de links

function Home() {
    return (
        <div>
            <h1>Bem vindo a página HOME</h1>
            <span>Sujeito programador</span>
            <br/>
            <br/>

            <Link to='/sobre'>Sobre</Link>
            <br/>
            <Link to='/contato'>Contato</Link>

            <hr/>

            {/* aqui podemos acessar a rota do produto com o id 123 */}
            <Link to='/produto/123'>Acessar Produto 123</Link>
        </div>
    )
}

export default Home;