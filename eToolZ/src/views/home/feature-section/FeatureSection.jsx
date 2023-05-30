import React from 'react'
import featureImg from '@src/assets/images/feature.jpg'
import styles from '@src/styles/views/home/components/feature-section/featureSection.module.css'
import { ReactComponent as ListIcon } from '@src/assets/icons/icon/list.svg'

const FeatureSection = () => {
    return (
        <section className='grid items-center lg:grid-cols-2 sm:grid-cols-1  max-[600px]:grid-cols-1
          gap-12 mt-[150px]'>
            <div className="left">
                <div className={styles.image}>
                    <img src={featureImg} alt="" />
                </div>
            </div>
            <div className='right'>
                <div className={styles.content}>
                    <h3 className="text-5xl font-bold">
                        What are the different types of content in
                        e-commerce?
                    </h3>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        voluptatum, quibusdam, voluptate, quia voluptas quod dolorum
                        voluptatibus quos quae quidem repellendus? Quisquam voluptatum,
                    </p>
                </div>
                <ul className='mt-10'>
                    <li className='flex gap-3 mt-3'>
                        <ListIcon />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </li>
                    <li className='flex gap-3 mt-3'>
                        <ListIcon />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </li>
                    <li className='flex gap-3 mt-3'>
                        <ListIcon />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default FeatureSection