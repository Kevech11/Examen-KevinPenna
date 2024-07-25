import { navbar } from "../../components/navbar.js"
const btnCancel = document.getElementById('btnCancel')
const header = document.getElementById('header')
header.innerHTML = navbar()


document.addEventListener('DOMContentLoaded', async () => {
    const summary = JSON.parse(localStorage.getItem('summary'));

    // Este código puede variar dependiendo de como se maneje la información del localStorage
    document.getElementById('city').value = summary.city.city;
    document.getElementById('hotel').value = summary.hotel;
    document.getElementById('cant').value = summary.cant;
    document.getElementById('days').value = summary.days;
    document.getElementById('total').value = summary.total;

    const summaryArray = JSON.parse(localStorage.getItem('summaries')) || [];
    summaryArray.push(summary);
    localStorage.setItem('summaries', JSON.stringify(summaryArray));

    document.getElementById('btnTravel').addEventListener('click', () => {
       
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const tel = document.getElementById('tel').value;

        const billingData = {
            name: name,
            lastName: lastName,
            email: email,
            tel: tel,
            city: document.getElementById('city').value,
            hotel: document.getElementById('hotel').value,
            cant: document.getElementById('cant').value,
            days: document.getElementById('days').value,
            total: document.getElementById('total').value
        };
       
        const billingArray = JSON.parse(localStorage.getItem('billingData')) || [];
        billingArray.push(billingData);
        localStorage.setItem('billingData', JSON.stringify(billingArray));

        const redirectMessage = document.getElementById('redirect-message1');
        redirectMessage.style.display = 'block';
        setTimeout(() => {
            window.location.href = './home'; 
        }, 3000); 
    });
});

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