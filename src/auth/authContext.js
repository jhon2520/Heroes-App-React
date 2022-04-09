import React, { useReducer,createContext,useEffect } from 'react';
import authReducer from './authReducer';

export const AuthContext = createContext();

const init = ()=>{
    // revisar el localstorage si hay información del usuario si no devuelve un 
    // objeto con el logged en false

    return JSON.parse(localStorage.getItem("user")) || {logged:false};
}

export const AuthProvider = ({children})=>{

    const [user,dispatch] = useReducer(authReducer,{},init)

    useEffect(()=>{
        
        if(!user) return;

        localStorage.setItem("user",JSON.stringify(user))

    },[user])

    return(

        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    

    );


}

