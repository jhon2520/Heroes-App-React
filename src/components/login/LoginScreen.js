import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import types from '../../types/types';


const LoginScreen = () => {

    const navigate = useNavigate();


    const context = useContext(AuthContext);
    const {dispatch} = context;

    const handleLogin = ()=>{
        
        console.log(dispatch);
        dispatch({
            type:types.login,
            payload:{
                name:"Jhon"
            }
        })
        
        // Con el segundo argumento que es un objeto utilizo el replace:true para que el histórico de este cambio y el usuario no se pueda devolver al login con la flecha hacia
        // atrás del navegador

        // Dirigir a la última ruta
        const lastPath = localStorage.getItem("lastPath") || "/marvel";

        navigate(lastPath,{
            replace:true
        });

    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button onClick={handleLogin} className='btn btn-primary'>Login</button>
        </div>
    )
}

export default LoginScreen