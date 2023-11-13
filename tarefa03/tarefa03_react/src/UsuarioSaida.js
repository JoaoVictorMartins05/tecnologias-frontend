import React from 'react';

const UsuarioSaida = ({ nome }) => {
  return (
    <div className="border border-secundary rounded p-3 mt-4">
      <p>Nome de usuário: {nome}</p>
      <p>Texto aleatório </p>
    </div>
  );
};

export default UsuarioSaida;