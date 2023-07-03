const limpiarHeroes = (arrHeroes)=>{
    let heroes= arrHeroes.map((heroe) => ({
        id : heroe.id,
        name : heroe.name,
        description : heroe.description,
        img : heroe.thumbnail,
        comics : heroe.comics,
    }));
    return heroes;
};

const limpiarHero = (hero)=>{
    console.log(hero);
    let heroe= hero.map((h)=>({
        name: h.name,
        id: h.id,
        description: h.description,
        img: `${h.thumbnail.path}.${h.thumbnail.extension}`,
        comics: h.comics,
    })) 
    return heroe;
};

export {
    limpiarHeroes,
    limpiarHero,
};