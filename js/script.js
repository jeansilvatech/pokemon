const namePokemon = document.querySelector('h1')
const idPokemon = document.querySelector('h2')
const image = document.querySelector('.image')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const form = document.querySelector('form');
const span = document.querySelector('span');
const card = document.querySelector('.card');
const input = document.querySelector('input');
const main = document.querySelector('main');
const pokeError = document.querySelector('.poke-error')
const btnSearch = document.querySelector('.search')
const url = 'https://pokeapi.co/api/v2/pokemon-form/'
let id = 0
const pokeApi = async(id)=>{

        const pokeResponse = await  fetch(`${url}${id}`);
        const data = await pokeResponse.json();
        return data;
   
}

function getImage(id){
    setTimeout(()=>{
        
        if(id<10){
            image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`
        }else if(id>=10 && id<100){
            image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`
        }else if(id>=100){
            image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
        }
        
    },1000)
    image.src = "./img/pokebola.png"
    image.classList.add("imageEffect")
}
function removeAnimationImage(){
    image.classList.remove("imageEffect")
    namePokemon.classList.remove('textEffect')
    span.classList.remove('textOpacity')
    idPokemon.classList.remove('textEffect')
}
function PokeNotFound(){
    
        pokeError.innerHTML = "Digite um ID ou nome válido."
        pokeError.style.display = 'block'
        pokeError.style.backgroundColor = '#8B0000'
        input.disabled =true
        setInterval(()=>{
            pokeError.innerHTML = "Tente novamente!"
            setInterval(() => {
                pokeError.style.display = 'none'
                input.disabled =false
            }, 3000);
            
        },5000)
    
   
}
function NotRender(){
            namePokemon.innerText = 'Nome'
            idPokemon.innerText = 'Nº'
            span.innerText = 'Tipo'
            image.src = "./img/shadow.png"
            main.style.backgroundImage = "./img/background.jpg"
            card.style.backgroundColor = ''
            main.style.background = ''

}
function bgCard(typePokemon){
    switch(typePokemon){
        case 'grass':
            card.style.backgroundColor = '#3CB371'
            main.style.backgroundImage = 'linear-gradient(to bottom, #11998e, #38ef7d)';
        break;
        case 'fire':
            card.style.backgroundColor = '#FFA500'
            main.style.backgroundImage = 'linear-gradient(to bottom, #f12711, #f5af19)'
        break;
        case 'water':
            card.style.backgroundColor = '#1E90FF'
            main.style.backgroundImage = 'linear-gradient(to bottom, #2193b0, #6dd5ed)'
        break;
        case 'bug':
            card.style.backgroundColor = '#729f3f'
            main.style.backgroundImage = 'linear-gradient(to bottom, #56ab2f, #a8e063)'
        break;
        case 'normal':
            card.style.backgroundColor = '#808080'
            main.style.backgroundImage = 'linear-gradient(to bottom, #304352, #d7d2cc)'
        break;
        case 'poison':
            card.style.backgroundColor = '#9370DB'
            main.style.backgroundImage = 'linear-gradient(to bottom, #834d9b, #d04ed6)'
        break;
        case 'electric':
            card.style.backgroundColor = '#FFD700'
            main.style.backgroundImage = 'linear-gradient(to bottom, #f7971e, #ffd200)'
        break;
        case 'ground':
            card.style.backgroundColor = '#F0E68C'
            main.style.backgroundImage = 'linear-gradient(to bottom, #cac531, #f3f9a7)'
        break;
        case 'fairy':
            card.style.backgroundColor = '#EE82EE'
            main.style.backgroundImage = 'linear-gradient(to bottom, #f4c4f3, #fc67fa)'
        break;
        case 'fighting':
            card.style.backgroundColor = '#d56723'
            main.style.backgroundImage = 'linear-gradient(to bottom, #ff5f6d, #ffc371)'
        break;
        case 'psychic':
            card.style.backgroundColor = '#FF69B4'
            main.style.backgroundImage = 'linear-gradient(to bottom, #b24592, #f15f79)'
        break;
        case 'rock':
            card.style.backgroundColor = '#a38c21'
            main.style.backgroundImage = 'linear-gradient(to bottom, #414d0b, #727a17)'
        break;
        case 'ghost':
            card.style.backgroundColor = '#7b62a3'
            main.style.backgroundImage = 'linear-gradient(to bottom, #9d50bb, #6e48aa)'
        break;
        case 'ice':
            card.style.backgroundColor = '#00BFFF'
            main.style.backgroundImage = 'linear-gradient(to bottom, #c0c0aa, #1cefff)'
        break;
        case 'steel':
            card.style.backgroundColor = '#9eb7b8'
            main.style.backgroundImage = 'linear-gradient(to bottom, #e6dada, #274046)'
        break;
        case 'dragon':
            card.style.backgroundColor = '#DC143C'
            main.style.backgroundImage = 'linear-gradient(to bottom, #ed213a, #93291e)'
        break;
        case 'dark':
            card.style.backgroundColor = '#707070'
            main.style.backgroundImage = 'linear-gradient(to bottom, #232526, #414345)'
        break;
        case 'flying':
            card.style.backgroundColor = '#4169E1'
            main.style.backgroundImage = 'linear-gradient(to bottom, #1488cc, #2b32b2)'
        break;
        default:
        card.style.background = 'rgba(255, 255, 255, 0.1)' 
    }
}
const renderPokemon = async(id)=>{
    try{
            const data = await pokeApi(id);
            namePokemon.innerText = data.name;
            namePokemon.classList.add('textEffect')
            span.classList.add('textOpacity')
            idPokemon.classList.add('textEffect')
            idPokemon.innerText = data.id;
            const typePokemon = await data.types[0].type.name
            const typeTwo = await data.types
            if(typeTwo.length ===2){
                const typePokemon2 = await data.types[1].type.name
                span.innerText = `${typePokemon.toUpperCase()} | ${typePokemon2.toUpperCase()}`
            }else{
                span.innerText = `${typePokemon.toUpperCase()}`
            }
            getImage(data.id);
            bgCard(typePokemon);
          
    }
    catch{
        NotRender()
        PokeNotFound()
        
    }
}


//                           Events

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(input.value===''){
        PokeNotFound()
        NotRender()
    }
    renderPokemon(input.value.toLocaleLowerCase());
    input.value = ''
    removeAnimationImage();
})

btnSearch.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(input.value===''){
        PokeNotFound()
        NotRender()
    }
    renderPokemon(input.value.toLocaleLowerCase());
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

       

        console.log(input.value)