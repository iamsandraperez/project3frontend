import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ _id, imageUrl, companyName, sector, location }) => {
    return (
        <article className="UserCard mb-3 d-flex align-items-center justify-content-center">
            <Card className="text-center">
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    style={{ width: '260px', height: '260px', objectFit: 'cover' }}
                    className="mx-auto mt-3"
                />
                <Card.Body>
                    <Card.Title>{companyName}</Card.Title>
                    <Card.Text>
                        <strong>Sector:</strong> {sector}
                    </Card.Text>
                    <Card.Text>
                        <strong>Ubicación:</strong> {location}
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Link to={`/participantes/${_id}`} className="btn btn-dark btn-sm">
                            Ver detalles
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </article>
    );
};

export default UserCard;







