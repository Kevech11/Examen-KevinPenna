import { card } from '../../components/card.js'
import { navbar } from '../../components/navbar.js'
const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')
header.innerHTML = navbar()

document.addEventListener('DOMContentLoaded', async () => {

    //const data; //Deberia ser un array de objetos con la informacion de las ciudades
    const obj = {
        "Ciudades": [
            {
                "id": 1,
                "city": "Madrid",
                "img": "./img/madrid.jpg",
                "price": "2.100.000",
                "desc": "Descubre Madrid, una ciudad llena de vida, cultura y belleza. Desde la majestuosidad del Palacio Real hasta la animada Puerta del Sol, Madrid ofrece una mezcla perfecta de historia y modernidad. Pasea por el Parque del Retiro, admira obras maestras en el Museo del Prado y disfruta de la vibrante vida nocturna. ¡Madrid te espera con los brazos abiertos para vivir una experiencia inolvidable!"
            },
            {
                "id": 2,
                "city": "Barcelona",
                "img": "./img/barcelona.jpg",
                "price": "1.780.000",
                "desc": "Explora Barcelona, una ciudad donde la arquitectura de Gaudí se encuentra con el vibrante espíritu mediterráneo. Admira la impresionante Sagrada Familia, pasea por las coloridas Ramblas y relájate en las playas doradas. Sumérgete en la cultura catalana visitando el Barrio Gótico y disfruta de la deliciosa gastronomía local. ¡Barcelona es el destino perfecto para una aventura inolvidable!"
            },
            {
                "id": 3,
                "city": "Valencia",
                "img": "img/valencia.jpg",
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
            window.location.href = './info'
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