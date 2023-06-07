import Home from '@src/views/home/Home'
import MainCategory from '../views/main-category/MainCategory'
import ProductDetails from '../views/main-category/views/product-details/ProductDetails'
import About from '../views/about/About'
import Contact from '../views/contact/Contact'



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
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]
