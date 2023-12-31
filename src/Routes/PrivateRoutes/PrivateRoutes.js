import React, { useContext } from 'react';
import { AuthContex } from '../../context/AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {

    const { user,loading } = useContext(AuthContex)
    const location= useLocation();

    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;