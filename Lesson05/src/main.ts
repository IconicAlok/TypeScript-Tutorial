type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'World'
let e = <string | number>'World'

const addOrConcat = (a:number, b:number, c:'add'|'concat'):number | 
string => {
  if(c == 'add') return a + b
  return '' + a + b
}
const myVal: string = addOrConcat(2,2,'concat') as string

// be careful! TS sees no problem - but a string is returned
const nextVal: number = addOrConcat(2,2,'concat') as number

//10 as string 
(10 as unknown) as string

// The Dom
const img = document.querySelector('img') !
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img') 
img.src 
myImg.src
nextImg.src