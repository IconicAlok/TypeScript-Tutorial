// Index Signatures

// interface TranjectionObj {
//   readonly [index: string]: number
// }

interface TranjectionObj {
  readonly [index: string]: number
  Pizza: number
  Books: number
  Job: number
}

const todaysTranjections: TranjectionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
}
console.log(todaysTranjections.Pizza)
console.log(todaysTranjections['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTranjections[prop])

const todaysNet = (tranjections: TranjectionObj): number => {
  let total = 0
  for (const tranjection in tranjections) {
    if (typeof tranjections[tranjection] !== 'undefined')
      total += tranjections[tranjection]
  }
  return total
}
console.log(todaysNet(todaysTranjections))

// todaysTranjections.Pizza = 40

console.log(todaysTranjections['Alok'])

////////////////////////////////////////

interface Student {
  //[key:string]: string | number | number[] | undefined,
  name: string
  GPA: number
  classes?: number[]
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
}

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'name')

//////////////////////////////////////////

// interface Incomes{
//   [key: string | number]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
  salary: 100,
  bonus: 100,
  sidehustle: 250,
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
