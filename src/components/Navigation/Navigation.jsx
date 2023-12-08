import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import './Navigation.css'
import IconoNav from '../../../public/casco.png'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <div className='logotipo'><img src={IconoNav} alt='logo casco en navbar' /></div>
                <Navbar.Brand href={'/'}>Work Solutions</Navbar.Brand>
                <Nav className="me-auto">

                    <Link to={'/participantes'}>
                        <Nav.Link as='span'>Participantes</Nav.Link>
                    </Link>

                    <Link to={'/ultimas-publicaciones'}>
                        <Nav.Link as='span'>Últimas publicaciones</Nav.Link>
                    </Link>

                    {
                        user
                            ?
                            <>
                                <Link to='/mi-perfil'>
                                    <Nav.Link as='span'>Mi Perfil</Nav.Link>
                                </Link>


                                <Nav.Link as='span' onClick={logout}>Cerrar Sesión</Nav.Link>

                            </>
                            :
                            <>
                                <Link to={'/registro'}>
                                    <Nav.Link as='span'>Registro</Nav.Link>
                                </Link>
                                <Link to={'/inicio-sesion'}>
                                    <Nav.Link as='span'>Inicio Sesión</Nav.Link>
                                </Link>
                            </>
                    }


                </Nav>
            </Container>
        </Navbar >
    )
}

export default Navigation