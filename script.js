// Kintamojo sukurimas:
// 1. Iniciavimo zodelis (var, let, const)
// 2. Kintamojo pavadinimas 
// 3. lygybes zenklas 

console.groupCollapsed('basics')

var vardas = 'John' //String (tekstas) duomenu tipas

let pavarde = "Doe" //String (tekstas) duomenu tipas. Jokio skirtumo kokias kabutes naudoti, galima ir viengubas ir dvigubas, bet svarbu vienodai deti viename faile, nemiksuoti ju. 

let miestas = `Kaunas` //String (tekstas) duomenu tipas.


let amzius = 25 // number (skaicius) duomenu tipas. Skaiciams negalima deti kabuciu.

let yraStudentas = true // Boolean (true/false duomenu tipas). jei padarom tarpa, griuna kodas. Kai pavadinimas is keliu zodziu, kiekvienas naujas zodis is didziosios raides (budas vadinasi camelCase). 

// KINTAMUJU PAVADINIMUOSE NEGALIME DETI TARPO!

// KINTAMIEJI NEGALI PRASIDETI SKAICIUMI.

// KINTAMUJU PAVADINIMUOSE NEGALI BUTI SPECIALIUJU SIMBOLIU "!@#$%" 

// KINTAMUJU PAVADINIMUOSE NEGALI BUTI SPECIALIUJU ZODELIU. GOOGLE "RESERVED WORD" - SARASAS TU ZODELIU.

const asmensKodas = 486049180145 // Number (skaicius) duomenu tipas. Reiksmes keisti negalima

console.log(vardas)
console.log(pavarde)
console.log(miestas)
console.log(amzius)
console.log(yraStudentas)
console.log(asmensKodas)

pavarde = 'Steve' //kintamojo reiksme galima pakeisti, bet nenaudojam iniciavimo zodelio.

// amzius = 26 galima prideti kazkoki skaiciu prie esamo kintamojo. pvz kad butu 26 metai, pries tai nurodytas amzius 25. tai rasom taip, kaip apacioj.
amzius = amzius + 1

console.log(pavarde) 
console.log(amzius)

console.log(vardas, typeof vardas)
console.log(amzius, typeof amzius)
console.log(yraStudentas, typeof yraStudentas)

console.log('Hello, ' + vardas + '.')
console.log("Hello, " + vardas + ".")

console.log(`Hello, ${vardas}.`)

console.log('John Doe (amzius 25 m., asmens kodas 486049180145, gyvenamasis miestas Kaunas.')
// console.log(vardas + ' ' + pavarde + ' (amzius ' + amzius + ' m.), asmens kodas: ' asmensKodas + ', gyvenamasis miestas: ' + miestas + '.')

console.log(`${vardas} ${pavarde} (amzius ${amzius} m.), asmens kodas: ${asmensKodas}, gyvenamasis miestas: ${miestas}.`)

// John said: "Good morning".
console.log('John said: "Good morning".')
console.log(`John said: "Good morning".`)

// John said: "That's my car".
console.log(`John said: "That's my car".`)

// John `said`: "That's my car"
console.log('John `said`: ' + `"That's my car".`)

console.log('John `said`: "That\'s my car".')
console.log("John `said`: \"That's my car\".")
console.log(`John \`said\`: "That's my car".`)

// John \`said\`: "That's my car".
console.log('John \\`said\\`: That\'s my car".')
console.log("John \`said\`: \"That's my car\".")
console.log(`John \\\`said\\\`: "That's my car".`)

let sentence = 'lorem ipsum dolor sit amet consectetur elit.'

console.log(sentence)
console.log(sentence.length) //string simboliu skaicius
console.log(sentence[0])
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
console.log(sentence.replaceAll('a', 'u'))

console.groupEnd()

console.log('uz grupes')


console.groupCollapsed('Math Operators')

// Matematiniai operatoriai

let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2) //liekana. 22/10 liekana 2

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(22 +'10') //jei sudedame skaiciu ir stringa, o stringas yra skaicius, gaunasi skaiciai vienas salia kito, ne taip kaip tikimes pvz cia ats 2210

console.log(num1 - num3)
console.log(num1 * num3)
console.log(num1 / num3)
console.log(num1 % num3) //skaiciaus ir stringo, kuris yra skaicius neveikia taip kaip tikimes TIK sudetis, atimtis, dalyba, daugyba - veikia iprastai.

//jei yra galimybe, reikia VENGTI atlikti matematinius veiksmus su stringais ir skaiciais, reiketu juos atlikti tik su skaiciais. 

console.log('labas' * 5) //ats yra NaN - not a number 

console.groupEnd()


console.group('Conditions')

//SALYGOS - CONDITIONS. 

//viena lygybe programavime naudojama TIK kintamojo reiksmes priskyrimui.

// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.
console.log(10==10) //true
console.log('vienas' == 'vienas') //true
console.log('10' == '10') //true
console.log(10 == '10') //true


//Triguba lygybė (strictly equal ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.
console.log(10 === 10) //true
console.log('vienas' === 'vienas') //true
console.log('10' === '10') //true
console.log(10 === '10') //false


console.log(10 > 10) //false
console.log(10 < 10) //false
console.log(10 >= 10) //true
console.log(10 <= 10) //true


console.log(10 == 10) //true
console.log(10 != 10) //false - reiskia "nelygu" dvigubos nelygybes atveju

console.log(10 === 10) //true
console.log(10 !== 10) //false - reiskia "nelygu" trigubos nelygybes atveju

console.log(true)
console.log(!true) //sauktukas yra priesingybe tad gaunasi false. Priesinga reiksme.
console.log(!!true)


// IF, ELSE, IF, ELSE

let originalLight = 'YELLOW'
let light = originalLight.toLowerCase()

console.log(light)


if (light === 'green') {
    console.log('galima eiti!')
} else if (light === 'yellow') {
    console.log('pasiruosk')
} else if(light === 'red') {
    console.log('STOP')
} else {
    console.log('sugedo')
}

let originalWord = 'tree'
let word = originalWord.toLowerCase()
console.log(word)
// console.log(word[0])
// console.log(word[1])
// console.log(word[2])
// console.log(word[3])

let firstLetter = word[0]
let thirdLetter = word[2]

console.log(thirdLetter)

// AND operator - &&


//zodis - tips
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'p' === 'p')
// console.log(true && true)
// console.log(true)

//zodis - tree
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'e' === 'p')
// console.log(true && false)
// console.log(false)


if (firstLetter === 't' && thirdLetter === 'p') {
    console.log(`Zodis ${word} prasideda raide t ir trecia raide yra p`) 
} else {
console.log(`Zodis ${word} neprasideda raite t arba trecia raide nera p`)
}

// OR operator - || 

//zodis - tips
console.log(firstLetter === 't' || thirdLetter === 'p')
console.log('t' === 't' || 'e' === 'p')
console.log(true || false)
console.log(true)

//zodis - tree
// console.log(firstLetter === 't' && thirdLetter === 'p')
// console.log('t' === 't' && 'e' === 'p')
// console.log(true && false)
// console.log(false)

if (firstLetter === 't' || firstLetter === 'h') {
    console.log(`Zodis ${word} prasideda raide t arba raide h`) 
} else {
console.log(`Zodis ${word} neprasideda raite t arba h`)
}


// pabandom ne su stringais

let personAge = 17

if (personAge >=18) {
    console.log('pirkti bilieta galima')
} else {
    console.log('pirkti bilieto negalima')
}

if (personAge >17) {
    console.log('pirkti bilieta galima')
} else {
    console.log('pirkti bilieto negalima')
}

if (personAge < 18) {
    console.log('pirkti bilieto negalima')
} else {
    console.log('pirkti bilieta galima')
}

if (personAge <=17) {
    console.log('pirkti bilieto negalima')
} else {
    console.log('pirkti bilieta galima')
}

//pvz salyga, kad gali pirkti nuo 16 metu su tevu sutikimu

personAge = 17

// if (personAge < 16) {
//     console.log('pirkti bilieto negalima')
// }   else if (personAge >= 16 && personAge < 18) {
//     console.log('Gali pirkti su tevu sutikimu')
// }   else if (personAge >= 18) {
//     console.log('pirkti bilieta galima')
// }


if (personAge < 16) {
    console.log('pirkti bilieto negalima')
}   else if (personAge < 18) {
    console.log('Gali pirkti su tevu sutikimu')
}   else {
    console.log('pirkti bilieta galima')
}

if (personAge >=18) {
    console.log ('pirkti bilieta gali')
}   else if (personAge >= 16) {
    console.log('pirkti galima su tevu sutikimu')
}   else {
    console.log('Pirkti bilieto negali')
}

//Nesting
personAge = 16

if (personAge >= 16) {

    if (personAge >= 18) {
    console.log ('pirkti bilieta gali')
    } else {
    console.log('gali pirkti su tevu sutikimu')
    }

}   else {
    console.log('Pirkti bilieto negali')
}

console.groupEnd()