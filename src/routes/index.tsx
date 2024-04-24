import AnonymousLayout from '../layouts/AnonymousLayout';
import MainLayout from '../layouts/MainLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Employees from '../pages/Employees';
import Salaries from '../pages/Salaries';
import PaymentLog from '../pages/PaymentLog';
import { renderRoutes } from './generate-routes.tsx';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/login',
        isPublic: true,
      },
      {
        name: 'register',
        title: 'Register page',
        component: Register,
        path: '/register',
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: 'dashboard',
        title: 'Dashboard page',
        component: Dashboard,
        path: '/dashboard',
        isPublic: false,
      },
      {
        name: 'employees',
        title: 'Employees page',
        component: Employees,
        path: '/employees',
        isPublic: false,
      },
      {
        name: 'salaries',
        title: 'salaries page',
        component: Salaries,
        path: '/salaries',
        isPublic: false,
      },
      {
        name: 'paymentLog',
        title: 'Payment log page',
        component: PaymentLog,
        path: '/payment-log',
        isPublic: false,
      },
      {
        name: 'redirect',
        title: 'redirect',
        component: <Navigate replace to="/login" />,
        path: '/',
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
