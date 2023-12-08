import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PublicationCard = ({ publication }) => {
    const { _id, title, date, description, owner } = publication

    return (
        <Card>
            {/* <Card.Img variant="top" src={imageUrl} /> */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {date}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/participantes/${owner._id}`}>
                    Publicado por {owner.companyName}
                </Link>
            </Card.Body>
        </Card>
    )
}

export default PublicationCard
