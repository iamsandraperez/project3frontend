import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import UsersList from '../../components/UsersList/UsersList'
import UsersService from '../../services/users.services'

function UsersListPage() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        UsersService.getUsers()
            .then(response => {
                setUsers(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error', error)
                setLoading(false)
            })
    }

    const handleSearch = (filters) => {
        const { sector, location } = filters

        const filteredUsers = users.filter(user => {
            if (!sector && !location) {
                return true
            }

            const sectorMatches = !sector || user.sector.toLowerCase().includes(sector.toLowerCase())
            const locationMatches = !location || user.location.toLowerCase().includes(location.toLowerCase())

            return sectorMatches && locationMatches
        });

        setUsers(filteredUsers);
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Listado de Usuarios</h1>
            <Form>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Control type="text" placeholder="Buscar por sector" onChange={(e) => handleSearch({ sector: e.target.value })} />
                    </Col>
                    <Col md={4}>
                        <Form.Control type="text" placeholder="Buscar por ubicación" onChange={(e) => handleSearch({ location: e.target.value })} />
                    </Col>
                    <Col md={2}>
                        <Button variant="dark" onClick={() => handleSearch({})}>Buscar</Button>
                    </Col>

                </Row>
            </Form>
            {loading ? (
                <h3>Cargando...</h3>
            ) : (
                <UsersList users={users} />
            )}
        </div>
    )
}

export default UsersListPage;
