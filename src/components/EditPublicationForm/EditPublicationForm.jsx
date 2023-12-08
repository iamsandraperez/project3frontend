import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import publicationService from "../../services/publication.services"
import { useParams } from "react-router-dom"

const EditPublicationForm = ({ fireFinalActions }) => {
    const { _id } = useParams()
    const currentDate = new Date().toISOString().split('T')[0]

    const [publicationData, setPublicationData] = useState({
        title: '',
        date: currentDate,
        description: '',
    })

    useEffect(() => {
        publicationService
            .getPublicationDetails(_id)
            .then(response => {
                const publication = response.data
                console.log(publication)
                setPublicationData({
                    title: publication.title,
                    date: publication.date,
                    description: publication.description
                })
            })
            .catch(err => console.log(err))
    }, [_id])

    const handleInputChange = e => {
        const { value, name } = e.target
        setPublicationData({ ...publicationData, [name]: value })
    }

    const handlePublicationSubmit = e => {
        e.preventDefault()

        publicationService
            .editPublication({ ...publicationData })
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
        <div className="editPublication">
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
                    <Button variant="dark" type="submit">Editar publicación</Button>
                </div>
            </Form>
        </div>
    )
}

export default EditPublicationForm 