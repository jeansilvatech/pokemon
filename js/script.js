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
    image.style.animation = "image 1s ease-in-out";
    
}
function removeAnimationImage(){
    image.style.animation = "";
}
function bgCard(typePokemon){
    switch(typePokemon){
        case 'grass':
            card.style.backgroundColor = '#3CB371'
            header.style.background = 'linear-gradient(to bottom, #11998e, #38ef7d)';
        break;
        case 'fire':
            card.style.backgroundColor = '#FFA500'
            header.style.background = 'linear-gradient(to bottom, #f12711, #f5af19)'
        break;
        case 'water':
            card.style.backgroundColor = '#1E90FF'
            header.style.background = 'linear-gradient(to bottom, #2193b0, #6dd5ed)'
        break;
        case 'bug':
            card.style.backgroundColor = '#729f3f'
            header.style.background = 'linear-gradient(to bottom, #56ab2f, #a8e063)'
        break;
        case 'normal':
            card.style.backgroundColor = '#808080'
            header.style.background = 'linear-gradient(to bottom, #304352, #d7d2cc)'
        break;
        case 'poison':
            card.style.backgroundColor = '#9370DB'
            header.style.background = 'linear-gradient(to bottom, #834d9b, #d04ed6)'
        break;
        case 'electric':
            card.style.backgroundColor = '#FFD700'
            header.style.background = 'linear-gradient(to bottom, #ffe000, #1c1c1c)'
        break;
        case 'ground':
            card.style.backgroundColor = '#F0E68C'
            header.style.background = 'linear-gradient(to bottom, #cac531, #f3f9a7)'
        break;
        case 'fairy':
            card.style.backgroundColor = '#EE82EE'
            header.style.background = 'linear-gradient(to bottom, #f4c4f3, #fc67fa)'
        break;
        case 'fighting':
            card.style.backgroundColor = '#d56723'
            header.style.background = 'linear-gradient(to bottom, #ff5f6d, #ffc371)'
        break;
        case 'psychic':
            card.style.backgroundColor = '#FF69B4'
            header.style.background = 'linear-gradient(to bottom, #b24592, #f15f79)'
        break;
        case 'rock':
            card.style.backgroundColor = '#a38c21'
            header.style.background = 'linear-gradient(to bottom, #414d0b, #727a17)'
        break;
        case 'ghost':
            card.style.backgroundColor = '#7b62a3'
            header.style.background = 'linear-gradient(to bottom, #9d50bb, #6e48aa)'
        break;
        case 'ice':
            card.style.backgroundColor = '#00BFFF'
            header.style.background = 'linear-gradient(to bottom, #c0c0aa, #1cefff)'
        break;
        case 'steel':
            card.style.backgroundColor = '#9eb7b8'
            header.style.background = 'linear-gradient(to bottom, #e6dada, #274046)'
        break;
        case 'dragon':
            card.style.backgroundColor = '#DC143C'
            header.style.background = 'linear-gradient(to bottom, #ed213a, #93291e)'
        break;
        case 'dark':
            card.style.backgroundColor = '#707070'
            header.style.background = 'linear-gradient(to bottom, #232526, #414345)'
        break;
        case 'flying':
            card.style.backgroundColor = '#4169E1'
            header.style.background = 'linear-gradient(to bottom, #1488cc, #2b32b2)'
        break;
        default:
        card.style.background = 'rgba(255, 255, 255, 0.1)' 
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


//                           Events

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLocaleLowerCase());
    console.log(input.value)
    input.value = ''
    removeAnimationImage();
})
      

prev.addEventListener('click', ()=>{
            id -= 1
            if(id<=0){
                id=1
            }
            renderPokemon(id);
            removeAnimationImage();
        })  
next.addEventListener('click', ()=>{
            id += 1
            if(id>905){
                id=905
            }
            renderPokemon(id);
            removeAnimationImage();
        })