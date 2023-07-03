import "dotenv/config";
import { limpiarHeroes,limpiarHero } from "./utileria.js";

const basePath = "https://gateway.marvel.com:443/v1/public";
const ts = "ts=1";
const apikey = process.env.key;
const hash = process.env.hash;

const options = {
  method: "GET",
  headers: {
    "Content-Type": ":application/json",
  },
};

const getAll = async () => {
  const fetch = (...args) => 
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
  const recurso = "/characters";
  const url = `${basePath}/${recurso}?${ts}&apikey=${apikey}&hash=${hash}`;
  
  fetch(url, options).then((res) => res.json()).catch((err) => console.error("error:" + err));
  
  try {
    let response = await fetch(url, options);
    response = await response.json();
    let heroes = limpiarHeroes(response.data.results);
    return heroes;
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
};


const getbyId = async (req) => {
  const fetch = (...args) => 
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
  const recurso = "/characters/";
  const url = `${basePath}/${recurso}${req.params.id}?${ts}&apikey=${apikey}&hash=${hash}`;
  
  fetch(url, options).then((res) => res.json()).catch((err) => console.error("error:" + err));
  
  try {
    let response = await fetch(url, options);
    response = await response.json();
    let heroe = limpiarHero(response.data.results);
    return heroe;
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
};

export const personajesServices = {
  getAll,
  getbyId,
};
