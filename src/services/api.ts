import axios from 'axios';

// Creamos una instancia de Axios con la configuración deseada
const api = axios.create({
    baseURL: "http://localhost:5000/"
});

export default api;
