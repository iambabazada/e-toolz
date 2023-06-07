import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../../../component/userCard/UserCard'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Team = () => {

    const [users, setUsers] = useState([])

    const getUser = async () => {
        const res = await axios.get("https://dummyjson.com/users")
        console.log(res.data)
        setUsers(res.data.users)
    }

    useEffect(() => {
        getUser()
    }, [])

    const NextArrow = () => {
        return (
            <div className="arrow next">
                <button className="rounded-full w-15 h-15 bg-primary">
                    ireli
                </button>
            </div>
        )
    }
    const PrevArrow = () => {
        return (
            <div>
                <button className="rounded-full w-15 h-15 bg-primary">
                    geri
                </button>
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow: <PrevArrow />,
        // nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section>
            <h1>
                Team
            </h1>
            <Slider {...settings} >
                {users.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
            </Slider>


        </section>
    )
}

export default Team