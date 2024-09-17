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
        </div>
    )
}

export default Home;