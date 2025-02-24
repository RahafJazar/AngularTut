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
}


//extract city and country
const { city, country }: { city: string, country: string } = company.location;
console.log(`city : ${city} , country : ${country}`)


//extract name of all employees
const employeesName: string[] = company.employees.map(employee => employee.name)
console.log(`\nemployees are :  ${employeesName} `)

//extract roles
const role: string = company.employees.map(employee => employee.role).join(",")
console.log(`\nRoles are : ${role}`)