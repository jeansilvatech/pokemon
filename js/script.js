const namePokemon = document.querySelector('h1')
const idPokemon = document.querySelector('h2')
const image = document.querySelector('.image')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const url = 'https://pokeapi.co/api/v2/pokemon/'
let id = 0
    
    next.addEventListener('click', ()=>{
            id += 1
           fetch(`${url}${id}`)
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                namePokemon.innerHTML = data.name;
                image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
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
                image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                idPokemon.innerHTML = id;
            }) 

        })  
       