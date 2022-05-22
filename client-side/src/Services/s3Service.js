import axios from 'axios'

const USER_BASE_URL = 'http://localhost:3500/s3'

const headers = {
    'Content-Type': 'application/json'
}

class UserService {
    getBuckets() {
        return axios.get(USER_BASE_URL + '/list')
    }
    createBucket(data) {
        return axios.post(USER_BASE_URL + '/create', data, { headers: headers });
    }
    
}

export default new UserService()