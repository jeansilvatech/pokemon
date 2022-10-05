const namePokemon = document.querySelector('h1')
const idPokemon = document.querySelector('h2')
const image = document.querySelector('.image')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const url = 'https://pokeapi.co/api/v2/pokemon/'
let id = 0
function getImage(){
    if(id<10){
        image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`
    }else if(id>=10 && id<100){
        image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`
    }else if(id>=100){
        image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    }
}
    next.addEventListener('click', ()=>{
        
            id += 1
            console.log(id)
           fetch(`${url}${id}`)
            .then((response)=>{
                return response.json();
            }).then( async(data)=>{
                namePokemon.innerHTML = await data.name;
                getImage();
                idPokemon.innerHTML = id;
            }) 

        })      

        prev.addEventListener('click', ()=>{
            id -= 1
           fetch(`${url}${id}`)
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                namePokemon.innerHTML = data.name;
                getImage();
                idPokemon.innerHTML = id;
            }) 

        })  
       