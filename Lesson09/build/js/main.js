// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database etc.
    return assign;
};
const assignVerified = { ...assignGraded, verified: true };
recordAssignment({ ...assignGraded, verified: true });
// Record
const hexColorMap = {
    red: 'FFF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'U',
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: 'k123',
    grade: 85,
};
const Preview = {
    studentId: 'k123',
    title: 'Final Project',
};
// returnType
//type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility types', 100);
console.log(tsAssign);
const assignArgs = ["Generices", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUser().then(users => console.log(users));
export {};
