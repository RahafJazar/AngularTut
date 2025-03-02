"use strict";
const company = {
    name: "TechCorp",
    location: {
        city: "San Fraancisco",
        country: "USA"
    },
    employees: [
        { id: 1, name: "Alice", role: "Developer" },
        { id: 2, name: "Bob", role: "Manager" }
    ]
};
//extract city and country
const { city, country } = company.location;
console.log(`city : ${city} , country : ${country}`);
//extract name of all employees
const employeesName = company.employees.map(employee => employee.name);
console.log(`\nemployees are :  ${employeesName} `);
//extract roles
const role = company.employees.map(employee => employee.role).join(",");
console.log(`\nRoles are : ${role}`);
//# sourceMappingURL=Question11.js.map