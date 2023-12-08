import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import usersService from '../../services/users.services'
import UserDetails from '../../components/UserDetails/UserDetails'
import UserColaborators from '../../components/UserColaborators/UserColaborators'
import UserPublications from '../../components/UserPublications/UserPublications'
import Loader from '../../components/Loader/Loader'

function UserDetailsPage() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const { _id } = useParams()

    useEffect(() => {
        getUserDetails()
    }, [_id])

    const getUserDetails = () => {
        usersService
            .getUserDetails(_id)
            .then(response => {
                setUser(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error', error)
                setLoading(false)
            })
    }


    return (
        <div>
            <h1>Detalles de Usuario</h1>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <UserDetails {...user} />
                    <UserColaborators {...user} />
                    <UserPublications {...user} />
                </>
            )}
        </div>
    )
}

export default UserDetailsPage


