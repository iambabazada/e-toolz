import React from 'react'
import aboutImg from '@src/assets/images/aboutimg.jpg'

const AboutSection = () => {

    return (
        <section className='my-24'>
            <div className="flex gap-9 max-[678px]:flex-col">
                <div className='w-1/2 max-[678px]:w-full'>
                    <h3 className='text-2xl font-extrabold text-textColor'>
                        This season presents the perfect opportunity to update your wardrobe and look stylish in the hot weather. Let's take a look at the 2023 summer fashion trends and explore some fantastic pieces to add to your wardrobe.
                    </h3>
                    <p className='mt-12'>
                        Neon Colors:
                        Neon colors are making a comeback this summer, injecting life into wardrobes. Neon yellow, orange, pink, and green, among other bright shades, provide an energetic and attention-grabbing look. Pairing a neon-colored t-shirt, dress, or accessory with an ordinary outfit instantly adds vibrancy.
                    </p>


                </div>
                <div className="w-1/2 max-[678px]:w-full h-[600px]">
                    <img src={aboutImg} className='w-full h-full object-cover' alt="" />


                </div>
            </div>
        </section>
    )
}

export default AboutSection