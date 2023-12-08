import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from "react-router-dom"
import uploadServices from "../../services/upload.services"

const SignupForm = () => {
    const [signupData, setSignupData] = useState({
        companyName: '',
        email: '',
        password: '',
        location: '',
        sector: '',
        contact: '',
        imageUrl: '',
        description: '',
    })

    const [loadingImage, setLoadingImage] = useState(false) // Variable de estado para el estado de carga de la imagen

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, imageUrl: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }


    return (

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="companyName">
                <Form.Label>Nombre de la empresa</Form.Label>
                <Form.Control type="text" value={signupData.companyName} onChange={handleInputChange} name="companyName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
                <Form.Label>Localización</Form.Label>
                <Form.Control type="text" value={signupData.location} onChange={handleInputChange} name="location" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="sector">
                <Form.Label>Sector</Form.Label>
                <Form.Control type="text" value={signupData.sector} onChange={handleInputChange} name="sector" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact">
                <Form.Label>Teléfono de Contacto</Form.Label>
                <Form.Control type="text" value={signupData.contact} onChange={handleInputChange} name="contact" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen Url</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} name="imagen" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={signupData.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Cargando imagen...' : 'Registrarme'}</Button>
            </div>

        </Form>
    )
}

export default SignupForm