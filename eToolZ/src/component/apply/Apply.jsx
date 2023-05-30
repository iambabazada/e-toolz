import React from 'react'
import Button from '@src/component/button/Button'

const Apply = () => {
    return (
        <section className='flex mb-10 flex-col gap-5 items-center mt-[150px]'>
            <h1 className='text-5xl font-bold'>
                Subscribe
            </h1>
            <p>
                You can stay up to date with our news by subscribing to us
            </p>
            <form className='flex gap-4'>
                <div className="form_group">
                    <input className='border-2 border-solid border-textColor py-2 px-4 rounded-xl' type="text" placeholder='Enter your email' />
                </div>
                <Button rounded variant="outline" size="md">
                    Subscribe
                </Button>
            </form>
        </section>
    )
}

export default Apply