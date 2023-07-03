import "dotenv/config";

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


const getByIdCharacter = async (req) => {
  const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

  const recurso = "/comics";

  const url = `${basePath}${recurso}?${ts}&apikey=${apikey}&hash=${hash}`;

  fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));

  try {
    let response = await fetch(url, options);
    response = await response.json();
    console.log("respuesta::::", JSON.stringify(response));
    return response.data.results;
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
};

export const comicsServices = {
  getByIdCharacter,
};
