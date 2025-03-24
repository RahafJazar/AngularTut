import { ReplaySubject } from "rxjs";
import User from "../models/user.model";
import { EmailValidator } from "@angular/forms";
import PaginatedResponse from "../shared/models/paginated-response";
import { signal } from "@angular/core";

//multi functions that will fill the user data 
// const users: User[] = [
//     {
//         id: 'user-1',
//         name: "Abdullah Ayman",
//         email: "abdullah@gmail.com",
//         password: "12234",
//         created_at: new Date("2024-03-01")
//     },
//     {
//         id: 'user-2',
//         name: "Ola mayasrah",
//         email: "ola@gmail.com",
//         password: "12543",
//         created_at: new Date('2024-03-15')
//     },
//     {
//         id: 'user-3',
//         name: "Farah Tareq ",
//         email: "farah@gmail.com",
//         password: "163334",
//         created_at: new Date('2024-04-05')
//     },
//     {
//         id: 'user-4',
//         name: "Dana Fadi",
//         email: "dana@gmail.com",
//         password: "86924",
//         created_at: new Date('2025-01-01')
//     },
//     {
//         id: 'user-5',
//         name: "Doaa",
//         email: "doaa@gmail.com",
//         password: "82394",
//         created_at: new Date("2024-05-01")
//     },
//     {
//         id: 'user-6',
//         name: "gameel mayasrah",
//         email: "gameel@gmail.com",
//         password: "77533",
//         created_at: new Date('2025-03-15')
//     },
//     {
//         id: 'user-7',
//         name: "Salah  khader  ",
//         email: "Salah@gmail.com",
//         password: "62744",
//         created_at: new Date('2024-01-05')
//     },
//     {
//         id: 'user-8',
//         name: "qarar otoob",
//         email: "qarar@gmail.com",
//         password: "43434",
//         created_at: new Date('2024-01-01')
//     },
//     {
//         id: 'user-9',
//         name: "tamara jazar",
//         email: "ramara@gmail.com",
//         password: "53353",
//         created_at: new Date('2024-06-01')
//     },
//     {
//         id: 'user-10',
//         name: "lama otoob",
//         email: "lama@gmail.com",
//         password: "43434",
//         created_at: new Date('2024-11-01')
//     },
//     {
//         id: 'user-11',
//         name: "sana yazeed",
//         email: "sana@gmail.com",
//         password: "53535",
//         created_at: new Date('2024-09-12')
//     },
//     {
//         id: 'user-12',
//         name: "baraa dawoud",
//         email: "baraa@gmail.com",
//         password: "4533",
//         created_at: new Date('2024-12-01')
//     },
// ]


const USERS_LOCAL_STORAGE_KEY = 'users-data';
const USERS_Filled = 'users-filled';
export const fillData = () => {

    const filledStatus = !!localStorage.getItem(USERS_Filled);
    if (!filledStatus) {
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
            {
                id: 'user-5',
                name: "Doaa",
                email: "doaa@gmail.com",
                password: "82394",
                created_at: new Date("2024-05-01")
            },
            {
                id: 'user-6',
                name: "gameel mayasrah",
                email: "gameel@gmail.com",
                password: "77533",
                created_at: new Date('2025-03-15')
            },
            {
                id: 'user-7',
                name: "Salah  khader  ",
                email: "Salah@gmail.com",
                password: "62744",
                created_at: new Date('2024-01-05')
            },
            {
                id: 'user-8',
                name: "qarar otoob",
                email: "qarar@gmail.com",
                password: "43434",
                created_at: new Date('2024-01-01')
            },
            {
                id: 'user-9',
                name: "tamara jazar",
                email: "ramara@gmail.com",
                password: "53353",
                created_at: new Date('2024-06-01')
            },
            {
                id: 'user-10',
                name: "lama otoob",
                email: "lama@gmail.com",
                password: "43434",
                created_at: new Date('2024-11-01')
            },
            {
                id: 'user-11',
                name: "sana yazeed",
                email: "sana@gmail.com",
                password: "53535",
                created_at: new Date('2024-09-12')
            },
            {
                id: 'user-12',
                name: "baraa dawoud",
                email: "baraa@gmail.com",
                password: "4533",
                created_at: new Date('2024-12-01')
            },
        ]
        localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users))
        localStorage.setItem(USERS_Filled, 'true');
    }
}



//get data of users  but i don't want to return direct => I want to use asynchronous  بتحاكي عمل الباكند
export const getUsers = (page: number, pageSize: number): Promise<PaginatedResponse<User>> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const users: User[] = JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || '')
            const totalPages = Math.ceil(users.length / pageSize);
            const totalItems = users.length;
            const data: User[] = users.slice(start, end);
            const response: PaginatedResponse<User> = {
                page,
                totalPages,
                totalItems,
                data,
            }
            console.log("start", start)
            console.log("start", end)
            console.log("totalPages", totalPages)
            console.log("totalItems", totalItems)
            console.log("data", data)
            resolve(response)
        }, 3000);
    })
}


//add user بحاكوا عمل الباكيند
export const addUser = (user: User): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users: User[] = JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || '')
            user.id = 'user-' + (users.length + 1)
            user.created_at = new Date()
            users.push(user)
            localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users))
            resolve(user)
        }, 3000);
    })
}

export const getUser = (id: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users: User[] = JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || '')
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
            const users: User[] = JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || '')
            let userIndex = users.findIndex((user: User) => user.id === userUpdate.id)
            if (userIndex != -1) {
                const user = users[userIndex] = { ...userUpdate }
                user.updated_at = new Date();
                localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users))
                resolve(user)
            } else {
                reject("user not exist ")
            }
        }, 1000)
    })
}
export const deleteUser = (user: User): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users: User[] = JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || '')
            let userIndex = users.findIndex((user: User) => user.id === user.id)
            if (userIndex != -1) {
                users.splice(userIndex, 1);

                localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users))
                resolve(true)
            } else {
                reject("user not exist ")
            }
        }, 500)
    })
}

export const loginUser = (email: string, password: string): Promise<User> => {
    console.log("111 " + email + password)
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            const users: User[] = JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || '')
            const userIndex = users.findIndex((user: User) =>

                user.email === email && user.password === password
            )
            if (userIndex != -1) {
                const user = { ...users[userIndex] }
                resolve(user)

            } else {
                reject("Incorrect email or password")
            }

        }, 1000);
    })

}

export const clearAllUsers = () => {
    localStorage.removeItem(USERS_LOCAL_STORAGE_KEY);
    localStorage.removeItem(USERS_Filled)
}