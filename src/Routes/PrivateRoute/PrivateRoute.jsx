import React, { useContext } from 'react'
import { authContext } from '../../Context/AuthContex/AuthContext'
import LoadingPage from './../../Pages/LoadingPage/LoadingPage';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user, loading} = useContext(authContext)

if(loading){
    return <LoadingPage/>
}else if(user){
    return children
}

return <Navigate to='/login'/>

}

export default PrivateRoute
