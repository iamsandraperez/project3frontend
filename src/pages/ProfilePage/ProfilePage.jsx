import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import UserDetails from '../../components/UserDetails/UserDetails'
import UserColaborators from '../../components/UserColaborators/UserColaborators'
import UserPublications from '../../components/UserPublications/UserPublications'
import { Link } from "react-router-dom"


const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>

            <h1>Bienvenido a tu perfil {user.companyName}</h1>
            <div>
                <Link to='/crear-publicacion'><button>Crear Publicación</button></Link>
            </div>
            <div>
                <UserDetails {...user} />
                <UserColaborators {...user} />
                <UserPublications {...user} />
            </div>
        </div>
    )
}


export default ProfilePage