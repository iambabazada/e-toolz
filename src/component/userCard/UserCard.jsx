import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className='w-[350px] flex flex-col gap-3'>
            <div className="rounded-full w-40 h-40 overflow-hidden">
                <img src={user.image} className='w-full h-full ' alt="" />

            </div>
            <h2 className='text-textColor text-xl font-bold'>
                {user.maidenName}
            </h2>
            <p>
                {user.username}
            </p>
            <p>
                {user.userAgent}
            </p>
        </div>
    )
}

export default UserCard