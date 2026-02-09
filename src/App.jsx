import { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import './global.css';

function App() {
  const [imc, setImc] = useState(0);

  return (
    <div className="container">
      <Header />
      <Formulario onCalcula={setImc} />
      {imc > 0 && (
        <h3>Seu IMC é: {imc.toFixed(2)}</h3>//
      )}
      {imc > 0 && <Tabela imcAtual={imc} />}
    </div>
  );
}

export default App;