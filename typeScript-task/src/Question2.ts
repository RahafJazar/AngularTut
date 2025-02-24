//create interface 
interface NameObject {
    firstName: string,
    middleName: string,
    lastName: string
}


//********************  function ****************************

function fullName(name: NameObject | string[]): void {

    //check if the name come from array
    if (Array.isArray(name)) {
        if (name.length >= 3) {
            console.log(`my name : ${name[0]} ${name[1]} ${name[2]}`)
        }
        else {
            console.error("Invalid input : array  must contain first ,mid, last name")
        }
    }

    //check if the name come from  object
    else if (typeof name === "object" && name != null) {
        if (name.firstName && name.middleName && name.lastName) {
            console.log(`my name : ${name.firstName} ${name.middleName} ${name.lastName}`)

        }
        else {
            console.error("Invalid input : object  must contain first ,mid, last name ")
        }
    }



}

const myNameArray: string[] = ["Rahaf", "Bassam", "Jazar"]
const myNameObject: NameObject = { firstName: "Rahaf", middleName: "Bassam", lastName: "Jazar" }
const invalidArray: string[] = ["Rahaf", "Bassam"]
const invalidObject: Partial<NameObject> = {}

fullName(myNameArray)
fullName(myNameObject)
fullName(invalidArray)
fullName(invalidObject as NameObject) 