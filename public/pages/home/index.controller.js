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
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer your_token_here' 
        },
        body: JSON.stringify({          
        }),
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer' 
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data);
            for (let key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const item = data[key];
                    cardContainer.innerHTML += card(item.city, item.desc, item.price, item.id, item.img);
                    document.getElementById(item.id).href = './info';
                    document.getElementById(item.id).addEventListener('click', (e) => {
                        const data = { 
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


