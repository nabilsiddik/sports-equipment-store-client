import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import AuthContext from './Context/AuthContex/AuthContext';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import SportsEquipmentPage from './Pages/SportsEquipmentPage/SportsEquipmentPage';
import AddEquipmentPage from './Pages/AddEquipmentPage/AddEquipmentPage';
import MyEquipmentPage from './Pages/MyEquipmentPage/MyEquipmentPage';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/sports-equipment',
        element: <SportsEquipmentPage/>
      },
      {
        path: '/add-equipment',
        element: <PrivateRoute>
          <AddEquipmentPage/>
        </PrivateRoute>
      },
      {
        path: '/my-equipment',
        element: <PrivateRoute>
          <MyEquipmentPage/>
        </PrivateRoute>
      },
      {
        path: '/registration',
        element: <RegistrationPage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router = {router}></RouterProvider>
  </AuthContext>,
)
