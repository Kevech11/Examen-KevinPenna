import { navbar } from '../../components/navbar.js'
const header = document.getElementById('header')
header.innerHTML = navbar()

const btn = document.getElementById('btnTravel')
const totalP = document.getElementById('total')
const hotelSelect = document.getElementById('hotel')
const inputCant = document.getElementById('cant')
const inputDays = document.getElementById('days')
const selectedCity = JSON.parse(localStorage.getItem('selectedCity'))
let city = []

const getTotal = () => {
  const cant = inputCant.value
  const days = inputDays.value
  const selectedHotel = city.hotels.find(hotel => hotel.name === hotelSelect.value)

  totalP.textContent = `$${cant * days * selectedHotel.price + city.price}`
}

btn.addEventListener('click', () => {
  const data = {
    city: city,
    hotel: hotelSelect.value,
    cant: inputCant.value,
    days: inputDays.value,
    total: totalP.textContent
  }
  localStorage.setItem('summary', JSON.stringify(data))
  window.location.href = '../summary'
})

document.addEventListener('DOMContentLoaded', async () => {
  const url = "./hoteles/hoteles";
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
          console.log(`ID: ${item.id}, Name: ${item.name}`);
          $('#hotel').append(`<option> ${item.name}</option>`)
        }
      }
    })
    .catch(error => {
      console.error('Fetch error:', error); // Manejar errores de la solicitud
    });


  city = data.find(city => city.id === selectedCity) //Este codigo puede variar dependiendo de como se obtenga la ciudad seleccionada
  totalP.textContent = `$${city.price}`
  document.getElementById('title').textContent = `Calcula tu viaje a ${city.city}`
  document.getElementById('img').src = city.img
  document.getElementById('desc').textContent = city.desc

  let hotels = ``
  hotelSelect.innerHTML = hotels
})

inputCant.addEventListener('input', () => {
  getTotal()
})

inputDays.addEventListener('input', () => {
  getTotal()
})

hotelSelect.addEventListener('change', () => {
  getTotal()
})




































// document.addEventListener("DOMContentLoaded", () => {
//   fetch("./data/ciudades.json")
//       .then(response => response.json())
//       .then(data => {
//           const app = document.getElementById("app");
//           data.forEach(city => {
//               app.innerHTML += card({ name: city.city, description: city.desc });
//           });
//       });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const cityName = urlParams.get('city');

//   if (cityName) {
//       fetch("./data/ciudades.json")
//           .then(response => response.json())
//           .then(data => {
//               const city = data.find(city => city.city === cityName);
//               if (city) {
//                   document.getElementById("city-name").innerText = city.city;
//                   document.getElementById("city-description").innerText = city.desc;
                  
//               }
//           });
//   }
// });