const namePokemon = document.querySelector('h1')
const idPokemon = document.querySelector('h2')
const image = document.querySelector('.image')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const form = document.querySelector('form');
const input = document.querySelector('input');
const url = 'https://pokeapi.co/api/v2/pokemon/'
let id = 0

const pokeApi = async(id)=>{
    const pokeResponse = await  fetch(`${url}${id}`);
    const data = await pokeResponse.json();
    return data;
}
function getImage(id){
    if(id<10){
        image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`
    }else if(id>=10 && id<100){
        image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`
    }else if(id>=100){
        image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    }
}
const renderPokemon = async(id)=>{
    const data = await pokeApi(id);
    namePokemon.innerHTML = data.name;
    getImage(data.id);
    idPokemon.innerHTML = data.id;
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLocaleLowerCase());
    console.log(input.value)
    input.value = ''
})
    next.addEventListener('click', ()=>{
            id += 1
            renderPokemon(id)
        })      

        prev.addEventListener('click', ()=>{
            id -= 1
            renderPokemon(id)
        })  
       