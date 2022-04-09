import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'


const PublicRoutes = ({children}) => {

    const context = useContext(AuthContext);
    const {user} = context;

    return user.logged ? <Navigate to={"/Marvel"}/> : children 
}

export default PublicRoutes