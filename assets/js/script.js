let setPokemonImages = (data) => {
    let pokemonImageFront = document.getElementById("pokemonImageFront");
    let pokemonImageBack = document.getElementById("pokemonImageBack");
    let pokemonImageShiny = document.getElementById("pokemonImageShiny");

    pokemonImageFront.src = data.sprites.front_default;
    pokemonImageBack.src = data.sprites.back_default;
    pokemonImageShiny.src = data.sprites.front_shiny;
}

let setPokemonName = (data) => {
    let pokemonName = document.getElementById("pokemonName");

    pokemonName.innerHTML = "Name: " + data.name;
}

let setPokemonID = (data) => {
    let pokemonID = document.getElementById("pokemonID");

    pokemonID.innerHTML = "ID: " + data.id;
}

let setPokemonStats = (data) => {
    let pokemonStats = document.getElementById("pokemonStats");
    let temp = data.stats;
    
    pokemonStats.innerHTML = "";

    for (let a = 0; a < temp.length; a++) {
        pokemonStats.innerHTML += `${temp[a].stat.name} : ${temp[a].base_stat} <br>`;
    }
}

let setPokemon = (pokemon) => {
    let data;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    axios.get(url)
        .then(response => {
            data = response.data;
            setPokemonImages(data);
            setPokemonName(data);
            setPokemonID(data);
            setPokemonStats(data);
        })
}

setPokemon("pikachu");

document.getElementById("validateBtn").addEventListener("click", (e) => {
    e.preventDefault();

    let pokemon = document.getElementById("pokemon").value;

    setPokemon(pokemon);
})