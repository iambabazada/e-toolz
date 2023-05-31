import Home from '@src/views/home/Home'
import MainCategory from '../views/main-category/MainCategory'
import ProductDetails from '../views/main-category/views/product-details/ProductDetails'



export const appRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <MainCategory />,
    },
    {
        path: "/product/:id",
        element: <ProductDetails />,
    },
]
