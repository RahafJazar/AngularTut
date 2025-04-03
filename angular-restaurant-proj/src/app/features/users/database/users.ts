import User from "../models/user.model";
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


/* ------------------------get Users -------------------------*/
export const getUsers = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users)
        }, 2000);
    });
}