import { Container, Row, Col } from 'react-bootstrap'
import PublicationForm from '../../components/PublicationForm/PublicationForm'
import { Link } from 'react-router-dom'

const PublicationPage = () => {

    return (
        <div className='PublicationPage'>
            <Container>

                <Row>


                    <Col md={{ offset: 3, span: 6 }}>

                        <h1>Crear Publicación</h1>

                        <hr />
                        <PublicationForm />

                    </Col>
                </Row>
                <Link to='/mi-perfil'> <button> Volver a mi perfil</button> </Link>
            </Container>
        </div>
    )
}

export default PublicationPage