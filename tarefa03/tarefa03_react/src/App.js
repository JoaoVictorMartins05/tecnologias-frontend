import React, {useState} from 'react';
import UsuarioSaida from './UsuarioSaida';
import UsuarioEntrada from './UsuarioEntrada';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('');
  const usuarioEstatico = 'João Victor Martins';

  const handleChange = (event) => {
    setNomeUsuario(event.target.value); // Atualiza o estado do nome de usuário
  };

  return (
    <div className="App">
      <UsuarioEntrada value={nomeUsuario} handleChange={handleChange}/>
      <UsuarioSaida nome={nomeUsuario !== '' ? nomeUsuario : usuarioEstatico} />
    </div>
  );
}

export default App;