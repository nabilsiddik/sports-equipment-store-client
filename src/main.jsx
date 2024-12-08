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
import ShopContext from './Context/ShopContext/ShopContext';
import EquipmentDetailsPage from './Pages/EquipmentDetailsPage/EquipmentDetailsPage';
import UpdateEquipment from './Components/UpdateEquipment/UpdateEquipment';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sports-equipment',
        element: <SportsEquipmentPage />
      },
      {
        path: 'equipment-details/:id',
        element: <PrivateRoute>
          <EquipmentDetailsPage />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://sports-equipment-store-server-sigma.vercel.app/equipment/${params.id}`)
      },
      {
        path: '/add-equipment',
        element: <PrivateRoute>
          <AddEquipmentPage />
        </PrivateRoute>
      },
      {
        path: '/my-equipment',
        element: <PrivateRoute>
          <MyEquipmentPage />
        </PrivateRoute>
      },
      {
        path: '/update-equipment/:id',
        element: <PrivateRoute>
          <UpdateEquipment />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://sports-equipment-store-server-sigma.vercel.app/equipment/${params.id}`)
      },
      {
        path: '/registration',
        element: <RegistrationPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <AuthContext>
    <ShopContext>
      <RouterProvider router={router}></RouterProvider>
    </ShopContext>
  </AuthContext>,
)
