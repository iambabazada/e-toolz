import React from 'react'
import HeroImg from '@src/assets/images/hero.jpg'
import Button from '@src/component/button/button'

const Hero = () => {
    return (
        <section className='h-screen bg-orange-200 absolute top-0 left-0 w-full'>
            <div className="content flex max-[978px]:flex-col max-[978px]:items-start items-center justify-between gap-10 mt-[100px]">
                <div className="w-6/12 max-[978px]:w-full  pl-12 flex flex-col gap-8">
                    <h1 className='text-6xl font-bold'>
                        Elevate Your Lifestyle with Convenience.
                    </h1>
                    <p className='text-lg'>
                        Welcome to a world of convenience and elevated lifestyle. Our online store is designed to enhance your shopping experience and simplify your life.
                    </p>
                    <div>
                        <Button variant="primary" rounded size="lg">
                            Start Looking
                        </Button>
                    </div>
                </div>
                <div className="w-6/12 flex max-[978px]:hidden justify-end ">
                    <div className="w-[720px] h-[871px]  rounded-tl-[200px]">
                        <img src={HeroImg} className='w-full rounded-tl-[200px] h-full object-cover' alt="" />
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Hero