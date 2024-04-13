async function searchPoke(term) { 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${term}`);
        const json = await response.json();
        printPokemon(json);
}

function printPokemon(json) {
    document.getElementById("pokemonImg").src = json.sprites.front_default;
    document.getElementById("pokemonName").textContent = json.name;
    document.getElementById("pokemonHP").textContent = `HP ${json.stats[0].base_stat}`;
    document.getElementById("pokemonType").textContent = json.types.map(type => type.type.name).join(" / ");
    document.getElementById("pokemonWeight").textContent = `${json.weight / 10}kg`;
    document.getElementById("pokemonHeight").textContent = `${json.height / 10}m`;

    document.getElementById("pokemonDetails").style.display = "block";
}

async function searchItem(term) {
        const response = await fetch(`https://pokeapi.co/api/v2/item/${term}`);
        const item = await response.json();
        printItem(item);
}

function printItem(item) {
    document.getElementById("itemImg").src = item.sprites.default;
    document.getElementById("itemName").textContent = item.name;
    document.getElementById("itemCategory").textContent = item.category.name;
    document.getElementById("itemCost").textContent = item.cost;

    document.getElementById("itemDetails").style.display = "block";
}

async function searchMove(term) {
    const response = await fetch(`https://pokeapi.co/api/v2/move/${term}`);
        const move = await response.json();
        printMove(move);
}

function printMove(move) {
    document.getElementById("moveName").textContent = move.name;
    document.getElementById("movePower").textContent = move.power;
    document.getElementById("movePP").textContent = move.pp;
    document.getElementById("movePriority").textContent = move.priority;
    document.getElementById("moveAccuracy").textContent = move.accuracy;
    document.getElementById("moveClass").textContent = move.damage_class.name;

    document.getElementById("moveDetails").style.display = "block";
}


function showMenu() {
    // Don't need this
}

function run(){
    // Don't need this
}

if (window.location.pathname.includes("item.html")) {
    document.getElementById("itemsearchBtn").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value;
        searchItem(searchTerm);
    });
} 
else if (window.location.pathname.includes("move.html")) {
    document.getElementById("movesearchBtn").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value;
        searchMove(searchTerm);
    });
} 
else {
    document.getElementById("pokeSearchBtn").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value;
        searchPoke(searchTerm);
    });
}
