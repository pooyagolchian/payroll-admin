import { Navigate, Outlet } from 'react-router-dom';
import {ReactNode} from "react";


type ProtectedRouteType =  {
    isPublic?: boolean;
    isAuthorized?: boolean;
    children?: (ReactNode | null)[];
}

const ProtectedRoute = ({ isPublic, isAuthorized }:ProtectedRouteType ) => {
    return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;
