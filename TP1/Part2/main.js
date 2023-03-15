"use strict";
exports.__esModule = true;
var listOfNumbers = [1, 2, 3, 4, 5];
console.log("listOfNumbers: " + listOfNumbers);
console.log("length: " + listOfNumbers.length);
for (var index = 0; index < listOfNumbers.length; index++) {
    console.log(listOfNumbers[index]);
}
console.log("********************************************");
function comb(n, p) {
    if (p == 0 || p == n) {
        return 1;
    }
    else {
        return comb(n - 1, p - 1) + comb(n - 1, p);
    }
}
console.log("number of combinations: " + comb(10, 5));
console.log("********************************************");
var employee = { firstName: "John", lastName: "Doe", department: "IT", experience: 5 };
console.log("firstName: " + employee.firstName);
console.log("lastName: " + employee.lastName);
console.log("department: " + employee.department);
console.log("experience: " + employee.experience);
console.log("********************************************");
var employees = [
    { firstName: "John", lastName: "Doe", department: "IT", experience: 5 },
    { firstName: "Jane", lastName: "Doe", department: "IT", experience: 7 },
    { firstName: "John", lastName: "Smith", department: "IT", experience: 2 }
];
// Affichez l'employee avec la plus grande expérience si il y en a 2 qui ont la même expérience, affichez les deux
var maxExperience = 0;
var maxExperienceEmployee = [];
for (var index = 0; index < employees.length; index++) {
    if (employees[index].experience > maxExperience) {
        maxExperience = employees[index].experience;
        maxExperienceEmployee = [];
        maxExperienceEmployee.push(employees[index]);
    }
    else if (employees[index].experience == maxExperience) {
        maxExperienceEmployee.push(employees[index]);
    }
}
for (var index = 0; index < maxExperienceEmployee.length; index++) {
    console.log(maxExperienceEmployee[index].firstName + " " + maxExperienceEmployee[index].lastName);
}
console.log("********************************************");
var Employee_1 = require("./Employee");
var manager1 = new Employee_1.Manager(6);
var manager2 = new Employee_1.Manager(20);
function Verify(manager) {
    if (manager.noSubordonnées >= 15) {
        console.log("noSubordonnes " + manager.noSubordonnées + " is greater than 15");
    }
    else {
        console.log("noSubordonnes " + manager.noSubordonnées + " is less than 15");
    }
}
Verify(manager1);
Verify(manager2);
