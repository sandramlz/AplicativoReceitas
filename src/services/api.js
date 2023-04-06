import axios from 'axios'

//API rodar com IPV4: json-server --watch -d 150 --host 192.168.0.34 db.json

const api = axios.create({
    baseURL: 'http://192.168.0.34:3000/'
})

export default api;