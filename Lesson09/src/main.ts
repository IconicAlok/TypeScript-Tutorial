// Utility Types

// Partial

interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>,
): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: 'compsci123',
  title: 'Final Project',
  grade: 0,
}
console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database etc.
  return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

recordAssignment({ ...assignGraded, verified: true })

// Record
const hexColorMap: Record<string, string> = {
  red: 'FFF0000',
  green: '00FF00',
  blue: '0000FF',
}

type Students = 'Sara' | 'Kelly'
type letterGrade = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, letterGrade> = {
  Sara: 'B',
  Kelly: 'U',
}
interface Grades {
  assign1: number
  assign2: number
}
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
}

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
  studentId: 'k123',
  grade: 85,
}

type AssignPreview = Omit<Assignment, 'grade' | 'varified'>

const Preview: AssignPreview = {
  studentId: 'k123',
  title: 'Final Project',
}

// Exclude and Extract

type adjustedGrade = Exclude<letterGrade, 'U'>
type highGrade = Extract<letterGrade, 'A' | 'B'>

// Nonnullable
type allpossibleGrades = 'Alok' | 'John' | null | undefined
type namesOnly = NonNullable<allpossibleGrades>

// returnType

//type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}
type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign('Utility types', 100)
console.log(tsAssign)

// parameters

type assignParams = Parameters <typeof createNewAssign>

const assignArgs: assignParams = ["Generices", 100]

const tsAssign2 : newAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

// Awaited - helps us with ReturnType of a Promise 

interface User{
  id: number,
  name: string,
  username: string,
  email: string
}

const fetchUser = async (): Promise<User[]> => {

  const data = await fetch (
    'https://jsonplaceholder.typicode.com/users'
  ).then (res =>{
    return res.json()
  }).catch(err=>{
    if(err instanceof Error) console.log(err.message)
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>

fetchUser().then(users => console.log(users))

