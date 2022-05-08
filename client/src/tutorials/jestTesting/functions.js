const axios = require('axios')

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Hami'}
        user['lastName'] = 'Singh'
        return user;
    },
    fetchUser: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/2')
        .then(res => res.data)
        .catch(err => 'error')
    }
}

module.exports = functions