import { useNavigate } from 'react-router-dom';
import MainLayout from "../MainLayout";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <MainLayout>
               <h1>Dashboard</h1>
               <button onClick={handleLogout}>Logout</button>
        </MainLayout>
    );
};

export default Dashboard;
