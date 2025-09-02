let number = 1
while (number < 11) {
    console.log(number)
    number++
}

console.log(' ')
for (number = 1; number < 11; number++) {
    console.log(number)
}

//-------------------------------------------------------------------------------------------------

const password = 'Fabio'
let tries = 0

while (tries < 3) {
    let attempt = prompt('Venligst skriv passordet:')
    if (attempt === password) {
        console.log('Du har løst min gåte!')
        break;
    } else {
        tries++
    }
}

console.log (' ')
//-------------------------------------------------------------------------------------------------

let valg = prompt('Skriv et oddetall eller partall')
valg = Number(valg)
let i = 0

if(isNaN(valg)) {
    console.log('Det der er ikke et tall')
} else if (valg % 2 == 0) {
    for (i = 2; i <= 100; i += 2) {
        console.log(i)
        }
    } else {
        for (i = 1; i <= 99; i += 2) {
            console.log(i)
        }
    }
//-------------------------------------------------------------------------------------------------

for (let rad = 1; rad <= 10; rad++) {           
    let row = '';
    for (let kollone = 1; kollone <= 10; kollone++) {    
        row += (rad * kollone).toString().padStart(5, ' ')
    }
    console.log(row);
}