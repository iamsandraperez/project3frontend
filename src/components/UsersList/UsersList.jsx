import UserCard from "../UserCard/UserCard"
import { Row, Col } from 'react-bootstrap'

function UsersList({ users }) {
    return (
        !users ?
            <h1>Cargando ...</h1>
            :
            <>
                <Row>
                    {
                        users.map(elm => {
                            return (
                                <Col lg={{ span: 3 }} md={{ span: 6 }} key={elm._id}>
                                    <UserCard {...elm} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
    )

}


export default UsersList
