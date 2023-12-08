import './UserPublicationsCard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const PublicationCard = ({ publication, userId, handleDelete }) => {
    const { _id, title, date, description, owner } = publication

    return (
        <div key={_id}>
            <p>{title}</p>
            <p>{new Date(date).toLocaleDateString()}</p>
            <p>{description}</p>
            {owner === userId && (
                <Link to={`/editar-publicacion/${_id}`}>
                    <button>Editar</button>
                </Link>
            )}
            {owner === userId && (
                <Button onClick={() => handleDelete(_id)} variant="dark">
                    Eliminar publicación
                </Button>
            )}
        </div>
    )
}

export default PublicationCard
