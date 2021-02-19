import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-72b2e-default-rtdb.firebaseio.com/'
});

export default instance;