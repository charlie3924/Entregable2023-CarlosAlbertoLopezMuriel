import { useState } from "react";

function Formulario() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    
    const onSubmitForm = (e) => {
        e.preventDefault();
        alert(`Bienvenido: ${userName}`);
        };
        
    return (
        <>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Ingrese el Nombre del usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="password"
          placeholder="Ingrese la contraseña"
          value={password}
          onChange={onChangePassword}
        />
        <button type="button">
          Enviar
        </button>
            
        </form>
      </>
    );
  }
  
  export default Formulario;