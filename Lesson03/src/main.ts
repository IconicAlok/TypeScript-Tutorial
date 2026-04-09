let stringArr = ['one', 'hey', 'Alok']

let guiters = ['Strat', 'Les Paul', 5051]

let mixData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guiters[0] = 1998
guiters.unshift('Jim')

let test = []

let bands: string[] = []
bands.push('Van Halen')

// tuple
let myTuple: [string, number, boolean] = ['Alok', 28, true]

let mixed = ['John', 1, false]

myTuple[1] = 28

//object
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'alok',
  prop2: true,
}

exampleObj.prop1 = 'John'

interface Guiterist {
  name?: string
  active: boolean
  album: (string | number)[]
}

let evh: Guiterist = {
  name: 'Eddie',
  active: false,
  album: [1984, 5150, 'OU812'],
}
let jp: Guiterist = {
  active: true,
  album: ['I', 'II', 'IV'],
}

const greetGuiterist = (guiterist: Guiterist) => {
  if (guiterist.name) {
    return `${guiterist.name.toUpperCase}`
  }
  return `Hello!`
}

console.log(greetGuiterist(jp))

// Enums
// "Unlike most typescript features, Enums are not a
//  type-lavel addition to JavaScript
//  but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.A)
