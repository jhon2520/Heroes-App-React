import heroes from "../data/heroes";

const getHeroByName = (hero = "")=>{

    hero = hero.toLowerCase(); 

    if(hero === ""){
        return [];
    }

    return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(hero))
}

export default getHeroByName