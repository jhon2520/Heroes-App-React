import React,{useContext} from 'react'
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'


const PrivateRoute = ({children}) => {

    // obtener y guardar ultima ruta visitada
    const location = useLocation();
    console.log(location);
    localStorage.setItem("lastPath", location.pathname + location.search)


    // validar autentificación
    const context = useContext(AuthContext);
    const {user} = context;




    return user.logged ? children : <Navigate to="/login"/>
}

export default PrivateRoute