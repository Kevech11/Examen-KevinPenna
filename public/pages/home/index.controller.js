import { card } from '../../components/card.js'
import { navbar } from '../../components/navbar.js'
const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')
header.innerHTML = navbar()



document.addEventListener('DOMContentLoaded', async () => {
    const url = "./ciudades/ciudades";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
            'Authorization': 'Bearer your_token_here' // Cabecera de autorización si es necesario
        },
        body: JSON.stringify({
            //consultar
        }),
        mode: 'cors', // Modo de solicitud (cors, no-cors, same-origin)
        cache: 'no-cache', // Control de caché (default, no-store, reload, etc.)
        credentials: 'same-origin', // Tipo de credenciales (omit, same-origin, include)
        redirect: 'follow', // Control de redireccionamiento (follow, error, manual)
        referrerPolicy: 'no-referrer' // Política de referente (no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Procesar la respuesta como JSON
        })
        .then(data => {
            console.log(data);
            for (let key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const item = data[key];
                    cardContainer.innerHTML += card(item.city, item.desc, item.price, item.id, item.img);
                    document.getElementById(item.id).href = './info';
                    document.getElementById(item.id).addEventListener('click', (e) => {
                        const data = { //sacar city y poner d minuscula
                            city: item.city,
                            img: item.img,
                            desc: item.desc

                        }
                        localStorage.setItem('info', JSON.stringify(data));
                    })
                }
            }
            const btnCity = document.getElementsByName('btnCity')
            Array.from(btnCity).forEach(button => {
                button.addEventListener('click', (e) => {
                    const city = JSON.parse(e.target.dataset.city)
                    localStorage.setItem('selectedCity', JSON.stringify(city))
                    window.location.href = './info'
                    const data = {
                        city: city

                    }
                    localStorage.setItem('info', JSON.stringify(data))

                })
            })
        })
        .catch(error => {
            console.error('Fetch error:', error); 
        });
})


