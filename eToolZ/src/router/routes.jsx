import Home from '@src/views/home/Home'
import MainCategory from '../views/main-category/MainCategory'



export const appRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <MainCategory />,

    }
]
