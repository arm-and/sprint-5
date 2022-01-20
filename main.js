// Task 1
// Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies.
//     Create a showFullName() method that returns the student's first and last name.
// Create a nameIncludes(data) method that, using the showFullName() method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.
//     Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.
// Create a getter and setter direction() to read and specify the direction field.
//     Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.
//     Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
//     Create an instance of the stud3 class named ‘Ihor Kohut’ and the direction ‘qc’ using the static studentBuilder() method.
//
//     Usage example:
//     const stud1 = new Student('Ivan Petrenko', 'web');
// stud1.nameIncludes('Ivan');   // true
// stud1.nameIncludes('Denysenko'); // false
//
// class Student {
//     constructor(fullName, direction) {
//         this.fullName = fullName;
//         this._direction = direction;
//     }
//
//     showFullName() {
//         return this.fullName;
//     }
//
//     nameIncludes(data) {
//         return this.showFullName().includes(data);
//     }
//
//     static studentBuilder() {
//         return new Student('Ihor Kohut', 'qc');
//     }
//
//     get direction() {
//         return this._direction;
//     }
//
//     set direction(value) {
//         this._direction = value;
//     }
// }
//
// const stud1 = new Student('Ivan Petrenko', 'web');
// const stud2 = new Student('Sergiy Koval', 'python');
// const stud3 = Student.studentBuilder();
// console.log(stud1.nameIncludes('Iv'),stud1.nameIncludes('Denysenko'));   // true,false
// console.log(stud2.nameIncludes('Andrii'),stud2.nameIncludes('Koval'));   // false,false
// stud1.direction = 'java'
// console.log(stud1)

// Task 2
// Create a Person class that has a constructor that takes name and surname parameters and contains a showFullName() method that displays the person's first and last names.
// From the Person class, the Student class is inherited, the constructor of which, in addition to name and surname, takes the parameter year (the year of entering the university).
// In the Student class, you need to override the showFullName(midleName) method to display not only the first and last name, but also the middle name (midleName) of the student.
//     Also, in the Student class, you need to implement the showCourse() method, which will display the student's current course (from 1 to 6). The value of the course will be determined as the difference between the current year (to determine independently) and the year of admission to the university year.
// Result example:
//     const stud1 = new Student("Petro", "Petrenko", 2017);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 5
//
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     showFullName() {
//         return `${this.surname} ${this.name}`
//     }
// }
//
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//
//     showFullName(middleName) {
//         return `${super.showFullName()} ${middleName}`
//     }
//
//     showCourse() {
//         return new Date().getFullYear()- this.year;
//     }
// }
//
// const stud1 = new Student('Petro', 'Petrenko', 2017);
// console.log(stud1.showFullName('Petrovych'));
// console.log(`Current course: ${stud1.showCourse()}`);

// Task 3
// Create a Worker class that will have a constructor that accepts the following properties: fullName (first and last name), dayRate (rate per day of work), workingDays (number of days worked).
// 1) the class must have a showSalary() method that will display the employee's salary. Salary is the product of the dayRate by the number of days worked workingDays.
// 2) add a private experience field and assign it a value of 1.2 and use it as an additional multiplier when determining the salary - create the showSalaryWithExperience() method. Print the salary value with this coefficient.
// 3) add getters and setters for the experience field. Set experience = 1.5 and display it.
// 4) Derive salary value with new experience.
//     5) Create multiple instances of the class (workers) with different salaries as shown in the example below. Sort the salaries of the most experienced workers by growth and display the result in the format: worker_fullName: salary_value
// 6) Implement dynamic sorting for any number of Worker class instances.
// Example usage:
//     const worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
//
// const worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .
//
// const worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .
//
//
// Output example:
//
//     John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690
//
// Tom Tomson
// Tom Tomson salary: 1056
//     . . . . . .
//
//     Andy Ander
// Andy Ander salary: 667
//     . . . . . .
//
//     Sorted salary:
//     John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
    }
    #experience = 1.2;

    showSalaryWithExperience() {
        this.salary = this.dayRate * this.workingDays * this.#experience;
        return console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experience}`);
    }

    get showExp() {
        return this.#experience;
    }
    set setExp(value) {
        this.#experience = value;
    }
    static staticWorker(workers){

        console.log(workers.fullName);
        workers.showSalary();
        console.log(`New experience: ${workers.showExp}`);
        workers.showSalaryWithExperience();
        workers.setExp = 1.5;
        console.log(`New experience: ${workers.showExp}`);
        workers.showSalaryWithExperience();
    }

}

const workers = [
    new Worker('John Johnson', 20, 23),
    new Worker('Tom Tomson', 48, 22),
    new Worker('Andy Ander', 29, 23),
    new Worker('Petro Petrenko', 50, 30),
];

for (let i = 0; i < workers.length; i++){
    let worker = workers[i];
    Worker.staticWorker(worker);
}

workers.sort(
    (a, b) => a.salary - b.salary).map((el,) => {
    console.log(`${el.fullName}: ${el.salary}`);
})
