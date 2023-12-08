import { Container, Row, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import './IndexPage.css'
import imgLeftPart from '../../../public/welcome.jpg'
import publicationService from '../../services/publication.services'

const IndexPage = () => {

    const { user } = useContext(AuthContext)

    const [lastPublication, setLastPublication] = useState({})

    function getLastPublication() {

        publicationService
            .getLastPublication()
            .then(response => {
                setLastPublication(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getLastPublication()
    }, [])

    console.log(lastPublication)
    return (

        <Container >

            <Row>
                <div className='separationTitle'>
                    <Col md={{ offset: 0, span: 12 }}>
                        {user ?
                            <h2>¡Qué empiece la conexión {user.companyName}!</h2>
                            : <h1>No olvide registrarse para poder acceder a todo el contenido</h1>
                        }
                        <div className='separation'>
                            <hr />
                        </div>
                    </Col>
                </div>
            </Row>
            <div className='mainPart'>
                <div className='leftPart'>
                    <h3>Bienvenido a Work Solutions</h3>
                    <p>El espacio donde las conexiones se convierten en oportunidades tangibles y cercanas. Nuestra plataforma ha sido diseñada para reunir a profesionales, empresas y emprendedores con el objetivo de fomentar colaboraciones estratégicas y crecimiento empresarial.</p>
                    <p>En un mundo empresarial cada vez más interconectado, reconocemos la importancia de establecer relaciones sólidas y fructíferas. Con Work Solutions, te ofrecemos una plataforma dinámica y eficiente que facilita la conexión entre compañías afines, permitiendo que encuentren oportunidades de colaboración, asociaciones estratégicas y proyectos conjuntos.</p>
                    <img src={imgLeftPart} alt="imagen presentación" />

                </div>
                <div className='rightPart'>
                    <div key={lastPublication._id}>
                        <h3>Última noticia</h3>
                        <p>{lastPublication.title}</p>
                        <p>{lastPublication.date}</p>
                        <p>{lastPublication.description}</p>
                        <p>{lastPublication.owner?.companyName}</p>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default IndexPage