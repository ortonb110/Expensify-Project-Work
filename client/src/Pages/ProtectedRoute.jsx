import { useAppContext } from "../Contexts/AppContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {user} = useAppContext();
    if(!user) {
        return <Navigate to={'landing'}/>
    }
    return children;
}

export default ProtectedRoute