import React from 'react'

const ContactInfo = ({ data }) => {
    return (
        <div className='flex flex-col gap-6'>
            <div className="flex gap-4">
                {data.icon}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold text-textColor'>{data.title}</h1>
                <p className='text-textColor'>{data.description}</p>
            </div>
        </div>
    )
}

export default ContactInfo