function getLocation(location: { country: string, city: string | null }): string {
    return location.city ?? location.country
}

const location1: string = getLocation({ country: "Jordan", city: "Amman" })
const location2: string = getLocation({ country: "Jordan", city: null })

console.log("location 1  : ", location1)
console.log("location 2 : ", location2)