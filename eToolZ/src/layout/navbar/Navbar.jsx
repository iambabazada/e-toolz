import React from 'react'
import { ReactComponent as AppLogo } from '@src/assets/brand.svg'
import { Link } from 'react-router-dom'
import Button from '@src/component/button/button'



const Navbar = () => {
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

    return (
        <header className='mt-2 relative z-50'>
            <div className="flex items-center justify-between">
                <div>
                    <AppLogo className="w-[200px]" />
                </div>
                <nav className='flex gap-4 items-center'>
                    <ul className='flex gap-4'>
                        {links.map((link, i) => (
                            <li key={i} className='font-medium'>
                                <Link to={link?.url}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="cart">
                        <Button rounded size="sm" variant="outline" >
                            cart {0}
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar