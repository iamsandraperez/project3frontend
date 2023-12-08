import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import usersService from '../../services/users.services'

function FavoriteColaboratorButton({ colaboratorId, userId }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [favoritesList, setFavoritesList] = useState([])

    useEffect(() => {

        if (favoritesList.includes(colaboratorId)) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [favoritesList, colaboratorId])

    function handleAddToFavorites() {

        setIsFavorite(true)

        if (!favoritesList.includes(colaboratorId)) {
            const updatedFavoritesList = [...favoritesList, colaboratorId]
            setFavoritesList(updatedFavoritesList)

            usersService.addToFavorites(userId, colaboratorId)
                .then((response) => {
                    console.log('colaborador añadido')
                })
                .catch(err => {
                    console.error('Error al añadir a favoritos:', err)

                })
        }
    }

    function handleRemoveFromFavorites() {
        console.log('userId:', userId)
        console.log('colaboratorId:', colaboratorId)
        setIsFavorite(false)
        const updatedFavoritesList = favoritesList.filter(id => id !== colaboratorId)
        setFavoritesList(updatedFavoritesList)

        usersService.removeFromFavorites(userId, colaboratorId)
            .then((response) => {
                console.log('colaborador eliminado')
            })
            .catch(err => {
                console.error('Error al quitar de favoritos:', err)

            })
    }

    return (
        <>
            {!isFavorite ? (
                <Link to={`/participantes/${colaboratorId}`} className="btn btn-dark btn-sm me-2" onClick={handleAddToFavorites}>
                    Añadir a Favoritos
                </Link>
            ) : (
                <Link to={`/participantes/${colaboratorId}`} className="btn btn-dark btn-sm me-2" onClick={handleRemoveFromFavorites}>
                    Añadido a Colaboradores
                </Link>
            )}
        </>
    )
}

export default FavoriteColaboratorButton
