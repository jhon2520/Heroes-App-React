import React,{useState} from "react";

const useForm = (initState = {})=>{

    const [values, setValues] = useState(initState);

    const handleChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleReset = ()=>{
        setValues(initState);
    }

    return [values, handleChange,handleReset]

}

export default useForm;