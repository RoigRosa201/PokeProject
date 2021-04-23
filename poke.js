//const resultFromFetch = fetch('https://pokeapi.co/api/v2/1');
const getPokes = () => {
    return fetch('https://pokeapi.co/api/v2/')
        .then(res => res.json())
}

//console.log(resultFromFetch);