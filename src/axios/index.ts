const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json'
    } 
});

instance.get('/paintings')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    })