import axios from 'axios'

class UsersService {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/users`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUsers() {
        return this.api.get('/getAllUsers')
    }

    getUserDetails(_id) {
        return this.api.get(`/getOneUser/${_id}`)
    }

    deleteUser(_id) {
        return this.api.delete(`/deleteUser/${_id}`)
    }

    getColaborators(userId) {
        return this.api.get(`/getAllColaborators/${userId}`)
    }

    addToFavorites(userId, colaboratorId) {
        return this.api.post(`/addColaborators/${userId}`, { colaboratorId })
    }

    removeFromFavorites(userId, colaboratorId) {
        return this.api.delete(`/removeColaborators/${userId}`, { data: { colaboratorId } })
    }


    verifyToken() {
        return this.api.get('/verify')
            .then(response => {
                if (response.status === 200) {
                    return true
                } else {
                    return false
                }
            })
            .catch(error => {
                console.error('Error verifying token:', error)
                return false
            })
    }
}


const usersService = new UsersService()

export default usersService
