import React from 'react';

import RoutesApp from './routes';

// o component app é o primeiro a ser renderizado quando a nossa aplicação roda
function App() {
  return (
    // agora eu não vou mais renderizar uma div, mas sim o componente das nossas rotas
    <RoutesApp/>
  );
}

export default App;
