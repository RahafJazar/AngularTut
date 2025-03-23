import { ReplaySubject } from "rxjs";
import User from "../models/user.model";
import { EmailValidator } from "@angular/forms";

//multi functions that will fill the user data 
const users: User[] = [
    {
        id: 'user-1',
        name: "Abdullah Ayman",
        email: "abdullah@gmail.com",
        password: "12234",
        created_at: new Date("2024-03-01")
    },
    {
        id: 'user-2',
        name: "Ola mayasrah",
        email: "ola@gmail.com",
        password: "12543",
        created_at: new Date('2024-03-15')
    },
    {
        id: 'user-3',
        name: "Farah Tareq ",
        email: "farah@gmail.com",
        password: "163334",
        created_at: new Date('2024-04-05')
    },
    {
        id: 'user-4',
        name: "Dana Fadi",
        email: "dana@gmail.com",
        password: "86924",
        created_at: new Date('2025-01-01')
    },
]


//get data of users  but i don't want to return direct => I want to use asynchronous  بتحاكي عمل الباكند
export const getUsers = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users)
        }, 3000);
    })
}


//add user بحاكوا عمل الباكيند
export const addUser = (user: User): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.id = 'user-' + (users.length + 1)
            user.created_at = new Date()
            users.push(user)
            resolve(user)
        }, 3000);
    })
}

export const getUser = (id: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user: User) => user.id === id)
            if (user) {
                resolve(user)
            } else {
                reject("user not exist ")
            }
        }, 1000);
    })
}

export const updateUser = (userUpdate: User): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userIndex = users.findIndex((user: User) => user.id === userUpdate.id)
            if (userIndex != -1) {
                const user = users[userIndex] = { ...userUpdate }
                user.updated_at = new Date()
                resolve(user)
            } else {
                reject("user not exist ")
            }
        }, 1000)
    })
}

export const loginUser = (email: string, password: string): Promise<User> => {
    console.log("111 " + email + password)
    return new Promise((resolve, reject) => {
        const userIndex = users.findIndex((user: User) =>

            user.email === email && user.password === password
        )
        console.log("user", userIndex)
        setTimeout(() => {
            if (userIndex != -1) {
                const user = { ...users[userIndex] }
                resolve(user)

            } else {
                reject("Incorrect email or password")
            }

        }, 1000);
    })
}