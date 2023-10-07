
const PREZZO_PER_KM = 0.21;





const nameDOMElement = document.getElementById('name-surname');

const distanceDOMElement = document.getElementById('distance');

const discountDOMElement = document.getElementById('discount');

const generateDOMElement = document.getElementById('btn-generate');

const cancelDOMElement = document.getElementById('btn-cancel');



const ticketNameDOMElement = document.getElementById('ticket__name');

const ticketDiscountCodeDOMElement = document.getElementById('ticket__discount-code');

const ticketWagonDOMElement = document.getElementById('ticket__wagon');

const ticketCPDOMElement = document.getElementById('ticket__CP');

const ticketPriceDOMElement = document.getElementById('ticket__price');

generateDOMElement.addEventListener('click', 
function(){

    console.log(parseInt(distanceDOMElement.value));

    const distanceDOMElement_valueControl = parseInt(distanceDOMElement.value)

    if (distanceDOMElement.value < 0 || isNaN(distanceDOMElement_valueControl)) {
        alert("Numero di Km non valido, riprova.")
    } else {
        const distance = parseFloat(distanceDOMElement.value);
    console.log('km: ' + distance);

    console.log('codice sconto: ' + discountDOMElement.value);

    let discount = 0;

    if (discountDOMElement.value == '0'){
        discount = 20;
        ticketDiscountCodeDOMElement.innerHTML = ('Ridotto Minorenni');
    } else if (discountDOMElement.value == '2'){
        discount = 40;
        ticketDiscountCodeDOMElement.innerHTML = ('Ridotto Over 65');
    } else {
        ticketDiscountCodeDOMElement.innerHTML = ('Biglietto Standard');
    }

    console.log('sconto: ' + discount + '%');

    const firstPrice = PREZZO_PER_KM * distance;
    console.log('prezzo intero: ' + firstPrice);

    const finalPrice = firstPrice - ((firstPrice / 100) * discount);
    console.log('prezzo finale: ' + finalPrice.toFixed(2));

    ticketNameDOMElement.innerHTML = nameDOMElement.value;

    ticketWagonDOMElement.innerHTML = Math.floor(Math.random() * (20)) + 1;

    ticketCPDOMElement.innerHTML = Math.floor(Math.random() * (99999 - 1000 +1)) + 1000

    ticketPriceDOMElement.innerHTML = finalPrice.toFixed(2)
    }
});
