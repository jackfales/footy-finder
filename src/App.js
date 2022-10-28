import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import CreateAccount from './routes/CreateAccount';
import Dashboard from './routes/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/createaccount',
    element: <CreateAccount />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
