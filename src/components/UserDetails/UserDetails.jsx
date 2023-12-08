import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usersService from '../../services/users.services'
import FavoriteColaboratorButton from '../FavoriteColaboratorButton/FavoriteColaboratorButton'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import './UserDetails.css'

function UserDetails({ _id, companyName, sector, location, contact, description, imageUrl }) {
    const { user } = useContext(AuthContext)

    function handleDeleteUser(_id) {
        usersService
            .deleteUser(_id)
            .then(response => console.log('usuario eliminado'))
            .catch(err => console.log(err))
    }

    const showFavoriteButton = user && user._id !== _id

    return (
        <>
            <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <div>
                        {imageUrl && <img src={imageUrl} alt="Company Logo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />}
                        <h5>{companyName}</h5>
                        <p>{sector}</p>
                        <p>{location}</p>
                        <p>{contact}</p>
                        <p>{description}</p>
                    </div>
                    <div className="mt-2">
                        <Link to={`/participantes`} className="btn btn-dark btn-sm me-2">
                            Volver al listado
                        </Link>
                    </div>

                    {showFavoriteButton && (
                        <div className="mt-2">
                            <FavoriteColaboratorButton colaboratorId={_id} userId={user._id} />
                        </div>
                    )}
                    {user && user._id === _id && (
                        <div className="mt-2">
                            <Link to={`/participantes`} className="btn btn-dark btn-sm me-2" onClick={() => handleDeleteUser(_id)}>
                                Eliminar Usuario
                            </Link>
                        </div>
                    )}
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default UserDetails