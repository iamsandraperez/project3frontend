import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import UsersListPage from '../pages/UsersListPage/UsersListPage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'
import IndexPage from '../pages/IndexPage/IndexPage'
import PublicationPage from '../pages/NewPublicationPage/NewPublicationPage'
import LastPublicationsPage from '../pages/LastPublicationsPage/LastPublicationsPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoute'
import EditPublicationPage from '../pages/EditPublicationPage/EditPublicationPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<IndexPage />} />
            <Route path={'/registro'} element={<SignupPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />
            <Route path={'/participantes'} element={<UsersListPage />} />
            <Route path={'/ultimas-publicaciones'} element={<LastPublicationsPage />} />

            <Route element={<PrivateRoute />}>
                <Route path={'/mi-perfil'} element={<ProfilePage />} />
                <Route path={'/crear-publicacion'} element={<PublicationPage />} />
                <Route path={'/participantes/:_id'} element={<UserDetailsPage />} />
                <Route path={'/editar-publicacion/:_id'} element={<EditPublicationPage />} />
            </Route>

            <Route path={'*'} element={<p>ERROR</p>} />
        </Routes >
    )

}

export default AppRoutes

