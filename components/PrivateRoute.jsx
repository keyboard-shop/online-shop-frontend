


import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {

    const { currentUser } = useSelector(state => state.user)

    //console.log('USER is OK in <PrivateRoute> ===> ', currentUser)

    return currentUser ? <Outlet /> : <Navigate to='/login' />
}
