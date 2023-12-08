import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import publicationService from "../../services/publication.services"

const PublicationForm = ({ fireFinalActions }) => {
    const currentDate = new Date().toISOString().split('T')[0]

    const [publicationData, setPublicationData] = useState({
        title: '',
        date: currentDate,
        description: '',

    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setPublicationData({ ...publicationData, [name]: value })
    }

    const handlePublicationSubmit = e => {
        e.preventDefault()

        publicationService
            .savePublication({ ...publicationData })
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))

        setPublicationData({
            title: '',
            date: currentDate,
            description: '',
        })
    }

    return (
        <div className="CreatePublication">
            <Form onSubmit={handlePublicationSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={publicationData.title} name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" value={publicationData.date} name="date" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={publicationData.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear publicación</Button>
                </div>
            </Form>
        </div>
    )
}

export default PublicationForm
