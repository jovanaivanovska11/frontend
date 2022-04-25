import axios from "axios"

const instance =axios.create({
    baseURL: 'https://hidden-brook-42120.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;