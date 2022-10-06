const namePokemon = document.querySelector('h1')
const idPokemon = document.querySelector('h2')
const image = document.querySelector('.image')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const form = document.querySelector('form');
const span = document.querySelector('span');
const card = document.querySelector('.card');
const input = document.querySelector('input');
const header = document.querySelector('header');
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
            header.style.backgroundColor = '#7FFFD4'
        break;
        case 'fire':
            card.style.backgroundColor = '#FFA500'
            header.style.backgroundColor = '#FFA07A'
        break;
        case 'water':
            card.style.backgroundColor = '#1E90FF'
            header.style.backgroundColor = '#87CEEB'
        break;
        case 'bug':
            card.style.backgroundColor = '#729f3f'
            header.style.backgroundColor = '#90EE90'
        break;
        case 'normal':
            card.style.backgroundColor = '#808080'
            header.style.backgroundColor = '#DCDCDC'
        break;
        case 'poison':
            card.style.backgroundColor = '#9370DB'
            header.style.backgroundColor = '#D8BFD8'
        break;
        case 'electric':
            card.style.backgroundColor = '#FFD700'
            card.style.backgroundColor = '#EEE8AA'
        break;
        case 'ground':
            card.style.backgroundColor = '#F0E68C'
            card.style.backgroundColor = '#F5F5DC'
        break;
        case 'fairy':
            card.style.backgroundColor = '#EE82EE'
            card.style.backgroundColor = '#DDA0DD'
        break;
        case 'fighting':
            card.style.backgroundColor = '#d56723'
            card.style.backgroundColor = '#F4A460'
        break;
        case 'psychic':
            card.style.backgroundColor = '#FF69B4'
            card.style.backgroundColor = '#FFB6C1'
        break;
        case 'rock':
            card.style.backgroundColor = '#a38c21'
            card.style.backgroundColor = '#BDB76B'
        break;
        case 'ghost':
            card.style.backgroundColor = '#7b62a3'
            card.style.backgroundColor = '#E6E6FA'
        break;
        case 'ice':
            card.style.backgroundColor = '#00BFFF'
            card.style.backgroundColor = '#87CEFA'
        break;
        case 'steel':
            card.style.backgroundColor = '#9eb7b8'
            card.style.backgroundColor = '#B0C4DE'
        break;
        case 'dragon':
            card.style.backgroundColor = '#DC143C'
            card.style.backgroundColor = '#FA8072'
        break;
        case 'dark':
            card.style.backgroundColor = '#707070'
            card.style.backgroundColor = '#9370DB'
        break;
        case 'flying':
            card.style.backgroundColor = '#4169E1'
            card.style.backgroundColor = '#6495ED'
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