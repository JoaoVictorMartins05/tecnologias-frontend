import React, { useState } from "react";
import ContadorDeCaracteres from "./ContadorDeCaracteres";
import imgCancelar from "./icons/cancelarIcon.png";
import imgOk from "./icons/okIcon.png";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="container">
      {isAuthenticated ? (
        <div className="row">
          <div className="col text-center d-flex justify-content-center align-items-center">
            <h1 className="mb-4">Você está logado, Bem-vindo!</h1>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src={imgOk}
              alt="Erro: Não realizou login"
              className="img-fluid w-50"
            />
          </div>
          <ContadorDeCaracteres />
          <button onClick={handleLogout} className="btn btn-danger">
            Sair
          </button>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col text-center d-flex justify-content-center align-items-center">
              <h1 className="mb-4">
                Você não está logado, favor realizar login
              </h1>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img
                src={imgCancelar}
                alt="Erro: Não realizou login"
                className="img-fluid w-50"
              />
            </div>
          </div>
          <h1 className="mb-4 text-center">Faça o login</h1>
          <div className="row d-flex justify-content-center">
            <button onClick={handleLogin} className="btn btn-primary ">
              Entrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
