import React, { useState, useEffect } from 'react'
import usersService from '../../services/users.services'
import UserColaboratorCard from '../UserColaboratorsCard/UserColaboratorsCard'


function UserColaborators({ _id: userId }) {

    const [colaborators, setColaborators] = useState([])

    useEffect(() => {
        getAllCollaborators()
    }, [userId])

    const getAllCollaborators = () => {
        usersService
            .getColaborators(userId)
            .then(response => {
                setColaborators(response.data || [])
            })
            .catch(error => {
                console.error('Error fetching colaboradores:', error)
            })
    }

    return (
        <div>
            <h1>Lista de Colaboradores</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {colaborators.map(colaborator => (
                    <UserColaboratorCard key={colaborator._id} colaborator={colaborator} />
                ))}
            </div>
        </div>
    )
}

export default UserColaborators
