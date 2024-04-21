import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = localStorage.getItem('token'); // or your authentication logic here
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return children;
};


export default ProtectedRoute
