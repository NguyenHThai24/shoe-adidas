import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import ProductDetailPage from '../pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductPage />,
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage />,
      },
    ],
  },
])

export default router
