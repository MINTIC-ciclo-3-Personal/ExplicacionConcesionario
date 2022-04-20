import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'
import React from 'react'

const PrivateLayout = ({children}) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className='flex flex-col md:flex-row flex-nowrap h-full w-full'>
                <Sidebar/>
                <SidebarResponsive />
                <main className='flex w-full overflow-y-scroll items-center'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLayout