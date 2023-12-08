import { useState, useEffect } from "react"
import publicationService from "../../services/publication.services"
import PublicationCard from '../PublicationCard/PublicationCard'
import { Col, Row } from "react-bootstrap"

function AllPublications() {
    const [publications, setPublications] = useState([])

    useEffect(() => {
        getAllPublications()
    }, [])

    const getAllPublications = () => {
        publicationService
            .getPublications()
            .then((response) => {
                setPublications(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Row>
            {publications.map((publication) => (
                <Col md={4} key={publication._id} >
                    <PublicationCard publication={publication} />
                </Col>
            ))}
        </Row>
    )
}

export default AllPublications


