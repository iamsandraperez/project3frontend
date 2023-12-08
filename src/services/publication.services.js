import axios from 'axios'

class PublicationService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/publications`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getPublications() {
        return this.api.get('/getAllPublications')
    }

    getPublicationDetails(publication_id) {
        return this.api.get(`/getOnePublication/${publication_id}`)
    }

    savePublication(publicationData) {
        return this.api.post('/savePublication', publicationData)
    }

    getPublicationsByOwner(userId) {
        return this.api.get(`/getPublicationsByOwner/${userId}`)
    }
    editPublication(publication_id) {
        return this.api.get(`/editPublication/${publication_id}`)
    }

    deletePublication(publication_id) {
        return this.api.delete(`/removePublication/${publication_id}`)
    }
    getLastPublication() {
        return this.api.get(`/getLastPublication`)
    }

}

const publicationService = new PublicationService()

export default publicationService
