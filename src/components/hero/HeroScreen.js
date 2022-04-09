import React,{useMemo} from 'react'
import { useParams, Navigate,useNavigate } from 'react-router-dom'
import getHeroeById from '../../selectors/getHeroeById';

const HeroScreen = () => {


    const {heroeId} = useParams();
    // uso el usomemo con la dependencia heroeId porque le estoy diciendo que memorice esta función y que sólo
    // vuelva a llamarla si el heroeid cambia. Esto para evitar que siempre se vuelva a llamar cada vez que haya un cambio 
    // en el state

    const hero = useMemo(()=>getHeroeById(heroeId),[heroeId])
    
    const navigate = useNavigate();

    const handleReturn = ()=>{
        navigate(-1)
    }

    if(!hero){
        return(
            // Esto es lo correcto, utilizar un navigate para redireccionar ya que este es un 
            // componente y como tal debo retornar uno si mi código terminara aquí cuando  se 
            // ingresa un heroe que no existe
            <Navigate to="/"/>
        );
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    const imagePath = `/assets/heroes/${id}.jpg`;

    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img src={imagePath} 
                alt={hero.superhero} 
                className="img-thumbnail animate__animated animate__bounceInLeft "
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn ">
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First Appearance: </b>{ first_appearance }</li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{characters}</p>

                <button onClick={handleReturn} className='btn btn-outline-info'>
                    Regresar 
                </button>
            </div>
        </div>
    )
}

export default HeroScreen