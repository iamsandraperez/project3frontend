import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"
import Loader from "../components/Loader/Loader"


const PrivateRoute = () => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to='/inicio-sesion' />
    }

    return <Outlet />
}

export default PrivateRoute

