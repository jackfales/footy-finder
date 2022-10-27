import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseConfig';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './routes/Main';
import LoginPage from './routes/LoginPage';
import CreateAccount from './routes/CreateAccount';
import FindGames from './routes/FindGames';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/createaccount',
    element: <CreateAccount />,
  },
  {
    path: '/findgames',
    element: <FindGames />,
  },
]);

const App = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return <RouterProvider router={router} />;
};

export default App;
