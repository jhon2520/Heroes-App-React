import React,{useMemo} from 'react'
import HeroCard from './HeroCard';
import getHerosByPublisher from '../../selectors/getHeroByPublisher'



const HeroList = ( {publisher}) => {

    const heroes = useMemo(()=>getHerosByPublisher(publisher),[publisher]);

    return (
        <div className='animate__animated animate__fadeInLeft row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map((heroe)=>{
                    return(
                        <HeroCard 
                            key={heroe.id}
                            {...heroe}
                        />
                    );
                })
            }
        </div>
    )
}

export default HeroList