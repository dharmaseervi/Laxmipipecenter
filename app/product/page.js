import React from 'react'
import Brand from '../components/product/brand'
import Catelogs from '../components/product/catelogs'

export const metadata = {
    title: 'Products - Laxmi Pipe Center in Mysore, Karnataka',
    description: 'Explore a wide range of Astral plumbing pipes and sanitary ware at Laxmi Pipe Center in Mysore, Karnataka. We offer premium products including CPVC PRO, Pex-A PRO, MultiPex, Aquarius, ECO PRO, Silencio, Drain Pro, Drainmaster, Underground, and Aquasafe. Trusted brands like Jaquar, Onida, Parryware, Grohe, and Astral available.',
    keywords: 'Laxmi Pipe Center, Astral pipes, plumbing pipes, sanitary ware, Mysore, Karnataka, CPVC PRO, Pex-A PRO, MultiPex, Aquarius, ECO PRO, Silencio, Drain Pro, Drainmaster, Underground, Aquasafe, Jaquar, Onida, Parryware, Grohe, Astral'
  };
  
export default function ProductPage() {
    return (
        <div className=''>
            <Brand />
            <Catelogs />
        </div>
    )
}
