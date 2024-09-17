import React from 'react';

import RoutesApp from './routes';
// import Header from './components/header';

// o component app é o primeiro a ser renderizado quando a nossa aplicação roda
function App() {
  return (
    // // colocar em um fragment, que é como se fosse uma div, mas sem interferir visualmente
    // <>
    
    // {/* // aqui vamos carregar o header para todas as nossas páginas */}
    // <Header/>
    // {/* agora eu não vou mais renderizar uma div, mas sim o componente das nossas rotas */}
    // <RoutesApp/>

    // </>

    <RoutesApp/>
    
  );
}

export default App;
