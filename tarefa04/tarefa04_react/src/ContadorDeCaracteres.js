import React, { useState } from 'react';

const ContadorDeCaracteres = ({ value, handleChange }) => {

    var [caracteres, setCaracteres] = useState("")

    return (
        <div className="border border-primary rounded p-3 mt-4 mb-4">
            <input type="text" placeholder="Digite seu nome" value={caracteres} onChange={(e)=> setCaracteres(e.target.value)} />
            <p>Quantidade de caracteres digitados: {caracteres.length}</p>
        </div>
    );
};

export default ContadorDeCaracteres;