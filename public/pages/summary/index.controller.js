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

    
    const summaryArray = JSON.parse(localStorage.getItem('summaries')) || [];
    summaryArray.push(summary);
    localStorage.setItem('summaries', JSON.stringify(summaryArray));

})


btnCancel.addEventListener('click', () => {  
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => input.value = '');   
    localStorage.removeItem('summary');    
    const redirectMessage = document.getElementById('redirect-message');
    redirectMessage.style.display = 'block'; 
    setTimeout(() => {
        window.location.href = './home';
    }, 2000); 
});