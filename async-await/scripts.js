/*const getName = async () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Andres')
        }, 1500)
    })
}

const sayHello = async () => {
    const name = await getName()
    return `Hello ${name}`
}

sayHello().then(res => console.log(res))*/


// EJERCICIO DE PROMESAS PERO CON ASYNC/AWAIT

const users = [
    {
        id: 1,
        name: 'Andres'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
];

const emails = [
    {
        id: 1,
        email: 'andres@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
];

const getUser = async (id) => {
    const user = users.find(user => user.id == id);
    if (!user) {
        throw new Error(`Doesn't exist an user with id ${id}`);
    } else {
        return user;
    }
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id);
    if (!email) {
        throw new Error(`${user.name} has not email`);
    } else {
        return ({
            id: user.id,
            name: user.name,
            email: email.email
        })
    }
}

const getInfo = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        
        return console.log(`${user.name} email is ${res.email}`)
    } catch (error) {
        console.log(error)
    }
}

getInfo(1);