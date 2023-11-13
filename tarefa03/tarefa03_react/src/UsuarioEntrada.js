import React from 'react';

const UsuarioEntrada = ({ value, handleChange }) => {

    return (
        <div className="border border-primary rounded p-3">
            <input type="text" placeholder="Digite seu nome" value={value} onChange={handleChange} />
        </div>
    );
};

export default UsuarioEntrada;