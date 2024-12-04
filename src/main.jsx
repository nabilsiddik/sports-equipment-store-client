import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import AuthContext from './Context/AuthContex/AuthContext';
import LoginPage from './Pages/LoginPage/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      // {
      //   path: '/registration',
      //   element: <RegistrationPage/>
      // },
      {
        path: '/login',
        element: <LoginPage/>
      },
      // {
      //   path: '/cart',
      //   element: <CartPage/>
      // }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router = {router}></RouterProvider>
  </AuthContext>,
)
