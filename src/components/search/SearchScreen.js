import React,{useState,useMemo} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import queryString from "query-string"

import getHeroByName from '../../selectors/getHeroesByName'
import HeroCard from '../hero/HeroCard'



const SearchScreen = () => {
    
    const navigate = useNavigate();
    // useLocation me permite obtener la información de los queryparams de la url
    // estos se pueden manejar con la libreria https://www.npmjs.com/package/query-string
    const location = useLocation();

    // obtener la información del location con queryparams
    const query = queryString.parse(location.search)
    const {q} = query;
    console.log(q);

    const heroesfilted = useMemo(()=>getHeroByName(q),[q])  

    const [searchText, setSearchText] = useState({
        searchText : q
    })

    const handleInputChange = (e) =>{
        setSearchText({...searchText,[e.target.name]: e.target.value})
    }
    
    const handleSearch = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchText.searchText}`)
    }



    return (
        <>
            <h1>Busquedas</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={handleSearch}> 
                        <input 
                            onChange={handleInputChange}
                            type="text" 
                            placeholder='Buscar Heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText.searchText}
                        />

                        <button
                            type="submit"
                            className='btn btn-outline-primary mt-1 w-100'
                        >
                            Buscar...
                        </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr/>
                    {
                        (q === "") 
                        ? <div className="alert alert-info">Buscar un héroe</div>
                        : (heroesfilted.length === 0)
                        ? <div className="alert alert-danger">No hay resultado: {q}</div>
                        : heroesfilted.map((heroe)=>{
                            return(
                                <HeroCard
                                    key={heroe.id}
                                    {...heroe}
                                />
                            )
                        })
                    }
                
                </div>

            </div>
        </>
    )
}

export default SearchScreen