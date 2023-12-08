import publicationService from '../../services/publication.services'
import React, { useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import UserPublicationCard from '../UserPublicationsCard/UserPublicationsCard'

function UserPublications({ _id: userId }) {
    const { user } = useContext(AuthContext)
    const [publications, setPublications] = useState([])

    const getPublicationsByOwner = () => {
        publicationService
            .getPublicationsByOwner(userId)
            .then((response) => {
                setPublications(response.data)
            })
            .catch((error) => {
                console.error('Error fetching publications:', error)
            })
    }

    useEffect(() => {
        getPublicationsByOwner()
    }, [userId])

    const handleDelete = (publicationId) => {
        publicationService
            .deletePublication(publicationId)
            .then(() => {
                getPublicationsByOwner()
            })
            .catch((error) => {
                console.error('Error deleting publication:', error)
            })
    }

    return (
        <div>
            <h1>Publicaciones</h1>
            {publications.map((publication) => (
                <UserPublicationCard
                    key={publication._id}
                    publication={publication}
                    userId={user._id}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default UserPublications