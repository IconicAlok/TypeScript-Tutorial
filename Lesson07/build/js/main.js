// Index Signatures
const todaysTranjections = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTranjections.Pizza);
console.log(todaysTranjections['Pizza']);
let prop = 'Pizza';
console.log(todaysTranjections[prop]);
const todaysNet = (tranjections) => {
    let total = 0;
    for (const tranjection in tranjections) {
        if (typeof tranjections[tranjection] !== 'undefined')
            total += tranjections[tranjection];
    }
    return total;
};
console.log(todaysNet(todaysTranjections));
// todaysTranjections.Pizza = 40
console.log(todaysTranjections['Alok']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 100,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
export {};
