import { Routes } from './routes';
import { useMemo } from 'react';

const App = () => {
  const checkToken = useMemo(() => {
    const token = localStorage.getItem('token');
    return token === 'fake-token';
  }, []);

  return (
    <>
      <Routes isAuthorized={checkToken} />
    </>
  );
};

export default App;
