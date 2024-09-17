// Aqui a gente vai configurar as nossas rotas

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

// componente de roteamento

function RoutesApp() {
    return (
        // componente das nossas rotas
        <BrowserRouter>
        {/* aqui dentro vamos colocar as rotas */}
        <Routes>
            {/* aqui dentro eu coloca qual vai ser a rota da nossa aplicação */}
            {/* o Route é especifico para configurar cada rota */}

            <Route path='/' element={<Home/>}/>
            {/* element significa que eu quero renderizar um componente quando estiver na página */}

            <Route path='/sobre' element={<Sobre/>}/>

            <Route path='/contato' element={<Contato/>}/>

            <Route/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;