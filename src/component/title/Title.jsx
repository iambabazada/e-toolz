import React from 'react'
import Button from '@src/component/button/Button'

const Title = ({ btn, name, title, desc }) => {
    return (
        <div className='flex w-full items-center justify-between'>
            <div>
                <p className='uppercase'>{name}</p>
                <h3 className='text-4xl font-bold'>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                {btn && (
                    <Button rounded size="sm" variant="outline">
                        view all
                    </Button>

                )}

            </div>
        </div>
    )
}

export default Title