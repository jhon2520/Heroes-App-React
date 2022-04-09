import types from "../types/types";

// const state = {
//     name:"Jhon",
//     logged:true
// }


const authReducer = (state ={}, action) =>{

    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged:true
            }
        case types.logout:
            // cuando el usuario se salga quiero que quite sus propiedades del estado
            return{
                logged:false
            }

        default:
            return state;
    }

}

export default authReducer;