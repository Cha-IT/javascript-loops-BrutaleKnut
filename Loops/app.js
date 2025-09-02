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

let valg = prompt('Venligst velg et oddetall eller et partall', 1)
let tall = 0

switch (valg % 2) {
    case 0:
        tall = 2
        while (tall < 101) {
            console.log(tall)
            tall + 2
        }
        break;
    case 1:
        tall = 1
        while (tall < 100) {
            console.log(tall)
            tall + 2
        }
        break;
    default:
        console.log('Det der er ikke et tall')
}