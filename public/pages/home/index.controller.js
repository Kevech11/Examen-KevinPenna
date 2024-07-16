//import { card } from './components/card.js'
//import { navbar } from '../../components/navbar.js'
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

const card = (title, desc, price, id, img) => {
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
                    <button  name="btnCity" data-city="${id}" class="bg-purple-100 p-2 rounded-xl text-purple-500 font-semibold hover:bg-purple-50 w-full text-center">Ver mas</button>
                </div>
            </div>
        </div>
    </div>
    `
}
document.addEventListener('DOMContentLoaded', async () => {

    //const data; //Deberia ser un array de objetos con la informacion de las ciudades
    const obj = {
        "Ciudades": [
            {
                "id": 1,
                "city": "Madrid",
                "img": "",
                "price": "2.100.000",
                "desc": "Descubre Madrid, una ciudad llena de vida, cultura y belleza. Desde la majestuosidad del Palacio Real hasta la animada Puerta del Sol, Madrid ofrece una mezcla perfecta de historia y modernidad. Pasea por el Parque del Retiro, admira obras maestras en el Museo del Prado y disfruta de la vibrante vida nocturna. ¡Madrid te espera con los brazos abiertos para vivir una experiencia inolvidable!"
            },
            {
                "id": 2,
                "city": "Barcelona",
                "img": "",
                "price": "1.780.000",
                "desc": "Explora Barcelona, una ciudad donde la arquitectura de Gaudí se encuentra con el vibrante espíritu mediterráneo. Admira la impresionante Sagrada Familia, pasea por las coloridas Ramblas y relájate en las playas doradas. Sumérgete en la cultura catalana visitando el Barrio Gótico y disfruta de la deliciosa gastronomía local. ¡Barcelona es el destino perfecto para una aventura inolvidable!"
            },
            {
                "id": 3,
                "city": "Valencia",
                "img": "",
                "price": "1.500.000",
                "desc": "Descubre Valencia, donde la tradición se encuentra con la innovación. Pasea por la Ciudad de las Artes y las Ciencias, relájate en las playas del Mediterráneo y disfruta del encanto del casco antiguo. Saborea la auténtica paella valenciana y explora los jardines del Turia. ¡Valencia te ofrece una combinación perfecta de cultura, gastronomía y belleza natural para una experiencia inolvidable!"
            }
        ]
    };
    console.log(obj);

    for (const ciudad in obj) {
        console.log(`${ciudad}: ${obj[ciudad].forEach(item => {
            console.log(`${item.city}`);
            cardContainer.innerHTML += card(item.city, item.desc, item.price, item.id, item.img);
        })}`);
    }

    // obj.forEach((place) => {
    //     cardContainer.innerHTML += card(place.city, place.desc, place.price, place.id, place.img)
    // })

    const btnCity = document.getElementsByName('btnCity')
    Array.from(btnCity).forEach(button => {
        button.addEventListener('click', (e) => {
            const city = JSON.parse(e.target.dataset.city)
            localStorage.setItem('selectedCity', JSON.stringify(city))
            window.location.href = './pages/info'
        })
    })
})


   // const url = "./data/ciudades.json";
    // fetch(url)
    //     .then(response =>{
    //         if(!response.ok)
    //         {
    //             throw new Error('Error en la conexion');
    //         }
    //         return response.json();
    //     })
    //     .then(data =>{
    //         console.log(data);
    //     }) 