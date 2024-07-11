//import { card } from './components/card.js'



//import { navbar } from '../../components/navbar.js'
const card =(title, desc, price, id, img)=>{
    return `
    <div class="col-span-1 flex">
        <div class="bg-purple-500 flex flex-col rounded-3xl  w-full h-full hover:shadow-xl">
            <div class="flex-grow">
                <img src=${img} alt=${title} class="object-cover w-full h-48 rounded-t-xl">
            </div>
            <div class="p-3 text-white">
                <div class="flex justify-between">
                    <h1 class="text-4xl ">${title}</h1>
                    <p class="bg-purple-700 p-2 rounded-xl shadow-purple-400">desde $${price}</p>
                </div>
                <p class="my-5">${desc}</p>
                <div class="flex items-center justify-between gap-5">
                    <button name="btnCity" data-city="${id}" class="bg-purple-100 p-2 rounded-xl text-purple-500 font-semibold hover:bg-purple-50 w-full text-center">Ver mas</button>
                </div>
            </div>
        </div>
    </div>
    `
} 
const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')
header.innerHTML = `
    <nav class="bg-purple-900 p-5">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center gap-5">
                <a href="/" class="text-white text-2xl font-semibold">Home</a>
            </div>
        </div>
    </nav>
    `
document.addEventListener('DOMContentLoaded', async()=>{
  
   // const data; //Deberia ser un array de objetos con la informacion de las ciudades

    /*
    
    */
    const url = "./data/ciudades.json";
    fetch(url)
        .then(response =>{
            if(!response.ok)
            {
                throw new Error('Error en la conexion');
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
        }) 

    cardContainer.innerHTML += card("madrid", "real madrid","3000","1", "");
    data.forEach((place) => {
        //cardContainer.innerHTML += card(place.city, place.desc, place.price, place.id, place.img)
    })

    const btnCity = document.getElementsByName('btnCity')
    Array.from(btnCity).forEach(button => {
        button.addEventListener('click', (e) => {
            const city = JSON.parse(e.target.dataset.city)
            localStorage.setItem('selectedCity', JSON.stringify(city))
            window.location.href = './pages/info'
        })
    })
})