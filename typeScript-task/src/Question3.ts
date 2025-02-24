//********************  function **************************** 

function getObjValues(objectData: object): any[] {
    return Object.values(objectData)
}

const employeesAges: object = { "ahmad": 23, "ayat": 30, "Alaa": 22, "Farah": 23 }
const valuesInArray: number[] = getObjValues(employeesAges)

console.log(valuesInArray)