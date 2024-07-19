import { navbar } from "../../components/navbar.js"
const btnCancel = document.getElementById('btnCancel')
const header = document.getElementById('header')
header.innerHTML = navbar()

document.addEventListener('DOMContentLoaded', async()=>{
    const summary = JSON.parse(localStorage.getItem('summary'))
  
    //Este codigo puede variar dependiendo de como se maneje la informacion del localStorage
    document.getElementById('city').value = summary.city.city
    document.getElementById('hotel').value = summary.hotel
    document.getElementById('cant').value = summary.cant
    document.getElementById('days').value = summary.days
    document.getElementById('total').value = summary.total
})

btnCancel.addEventListener('click', () => {
    localStorage.removeItem('summary')
    window.location.href = './home'
})

