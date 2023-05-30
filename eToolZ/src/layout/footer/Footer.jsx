import React from 'react'
import { ReactComponent as Brand } from '@src/assets/brand.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {

            title: 'Products',
            path: '/products',
        },

        {
            title: 'About',
            path: '/about',
        },

        {
            title: 'Contant',
            path: '/contant',
        },
    ]


    return (
        <footer className='mt-[100px]'>
            <div className='flex flex-col gap-10 items-center'>
                <Brand width="300px" />
                <ul className='flex gap-5'>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex w-full justify-between mt-5 border-t-[1px] py-5 border-textColor">
                    <p>
                        2022 Relume. All right reserved.
                    </p>
                    <ul className='flex gap-6'>
                        <li>Privacy Policy</li>
                        <li>Terms of service</li>
                        <li>Cookies Settings</li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer