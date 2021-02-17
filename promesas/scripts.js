// Una promesa es un objeto con 2 callbacks internos


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

const getUser = (id) => {
    const user = users.find(user => user.id == id);
    const promise = new Promise((resolve, reject) => {
        if (!user) {
            reject (`Doesn't exist an user with id ${id}`);
        } else {
            resolve (user);
        }
    });
    return promise;
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id);

    const promise = new Promise((resolve, reject) => {
        if (!email) {
            reject (`${user.name} has not email`);
        } else {
            resolve ({
                id: user.id,
                name: user.name,
                email: email.email
            });
        }
    });

    return promise;
}

getUser(4)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))

// FORMA SIMPLIFICADA

// getUser(2)
//     .then(getEmail)
//     .then(console.log)
//     .catch(console.log)