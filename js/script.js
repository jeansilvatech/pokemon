const namePokemon = document.querySelector('h1')
const idPokemon = document.querySelector('h2')
const image = document.querySelector('.image')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const form = document.querySelector('form');
const span = document.querySelector('span');
const card = document.querySelector('.card');
const input = document.querySelector('input');
const url = 'https://pokeapi.co/api/v2/pokemon-form/'
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
function bgCard(typePokemon){
    switch(typePokemon){
        case 'grass':
            card.style.backgroundColor = '#3CB371'
        break;
        case 'fire':
            card.style.backgroundColor = '#FFA500'
        break;
        case 'water':
            card.style.backgroundColor = '#1E90FF'
        break;
        case 'bug':
            card.style.backgroundColor = '#729f3f'
        break;
        case 'normal':
            card.style.backgroundColor = '#808080'
        break;
        case 'poison':
            card.style.backgroundColor = '#9370DB'
        break;
        case 'electric':
            card.style.backgroundColor = '#FFD700'
        break;
        case 'ground':
            card.style.backgroundColor = '#F0E68C'
        break;
        case 'fairy':
            card.style.backgroundColor = '#EE82EE'
        break;
        case 'fighting':
            card.style.backgroundColor = '#d56723'
        break;
        case 'psychic':
            card.style.backgroundColor = '#FF69B4'
        break;
        case 'rock':
            card.style.backgroundColor = '#a38c21'
        break;
        case 'ghost':
            card.style.backgroundColor = '#7b62a3'
        break;
        case 'ice':
            card.style.backgroundColor = '#00BFFF'
        break;
        case 'steel':
            card.style.backgroundColor = '#9eb7b8'
        break;
        case 'dragon':
            card.style.backgroundColor = '#f16e57'
        break;
        case 'dark':
            card.style.backgroundColor = '#707070'
        break;
        case 'flying':
            card.style.backgroundColor = '#4169E1'
        break;
        default:
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.1)' 
    }
}
const renderPokemon = async(id)=>{
    const data = await pokeApi(id);
    const typePokemon = await data.types[0].type.name
    const typeTwo = await data.types
    namePokemon.innerHTML = data.name;
    getImage(data.id);
    idPokemon.innerHTML = data.id;
    if(typeTwo.length ===2){
        const typePokemon2 = await data.types[1].type.name
        span.innerHTML = `${typePokemon.toUpperCase()} | ${typePokemon2.toUpperCase()}`
    }else{
        span.innerHTML = `${typePokemon.toUpperCase()}`
    }
    bgCard(typePokemon); 
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLocaleLowerCase());
    console.log(input.value)
    input.value = ''
})
      

prev.addEventListener('click', ()=>{
            id -= 1
            if(id<=0){
                id=1
            }
            renderPokemon(id)
        })  
next.addEventListener('click', ()=>{
            id += 1
            if(id>905){
                id=905
            }
            renderPokemon(id)
        })