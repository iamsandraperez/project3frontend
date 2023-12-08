import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserColaboratorCard = ({ colaborator }) => {
    const { _id, companyName, sector, location } = colaborator

    return (
        <div className="col mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{companyName}</Card.Title>
                    <Card.Text>
                        {`${sector}-${location}`}
                    </Card.Text>
                    <div className="d-grid">
                        <Link to={`/participantes/${_id}`}>
                            Ver más detalles
                        </Link>


                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserColaboratorCard


