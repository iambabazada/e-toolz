import React from 'react'
import { ReactComponent as AppLogo } from '@src/assets/brand.svg'
import { Link } from 'react-router-dom'
import Button from '@src/component/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { openBasket } from '../../redux/basketSlice'
import Basket from '../basket/Basket'



const Navbar = () => {

    const dispatch = useDispatch()

    const links = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Products',
            url: '/products',
        },
        {
            name: 'About',
            url: '/about',
        },
        {
            name: 'Contact',
            url: '/contact',
        },
    ]

    const cartShow = useSelector(state => state.basket.isBasketOpen)

    const handleCart = () => {
        dispatch(openBasket(true))
    }

    const totalCount = useSelector(state => state.basket.totalCount)


    return (
        <header className='mt-2 relative z-50'>
            {cartShow && (
                <Basket />
            )}
            <div className="flex items-center justify-between">
                <div>
                    <AppLogo className="w-[200px]" />
                </div>
                <nav className='flex gap-4 items-center'>
                    <ul className='flex gap-4'>
                        {links.map((link, i) => (
                            <li key={i} className='font-medium'>
                                <a href={link?.url}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="cart">
                        <Button rounded size="sm" onClick={handleCart} variant="outline" >
                            cart <span className='text-primary'>{totalCount}</span>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar