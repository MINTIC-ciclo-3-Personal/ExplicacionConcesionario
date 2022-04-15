import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className='flex flex-nowrap h-full w-full'>
                <Sidebar/>
                <main className='flex w-full overflow-y-scroll items-center'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout