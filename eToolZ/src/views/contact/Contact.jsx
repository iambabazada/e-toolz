import React from 'react'
import ContactUs from './contactUs/ContactUs'
import { BiMessage } from 'react-icons/bi'
import { BiPhoneCall } from 'react-icons/bi'
import { BiLocationPlus } from 'react-icons/bi'
import ContactInfo from './contactUs/contactInfo'

const Contact = () => {
    const contactInfo = [
        {
            icon: <BiMessage size={"5rem"} color='#f47726' />,
            title: 'Email',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'mailto:hello@relum.io',

        },
        {
            icon: <BiPhoneCall size={"5rem"} color='#f47726' />,
            title: 'Phone',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'tel:hello@relum.io',

        },
        {
            icon: <BiLocationPlus size={"5rem"} color='#f47726' />,
            title: 'Office',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'https://goo.gl/maps/ewMjyuHYa3euM4DHA',

        },

    ]
    return (
        <main>
            <ContactUs />
            <section className='flex gap-8 max-[768px]:flex-col mt-32'>
                {contactInfo.map((item, index) => (
                    <a href={item.url} target='_blank'>
                        <ContactInfo data={item} />
                    </a>

                ))}

            </section>

        </main>
    )
}

export default Contact