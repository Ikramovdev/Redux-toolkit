import { Button, Input } from 'antd'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-5 bg-blue-400 flex items-center justify-between'>
        <h1 className='font-bold font-montserrat text-[30px] text-white'>Products</h1>
        <div className='flex items-center space-x-5'>
            <Input className='w-[300px]' placeholder='Searching...' allowClear size='large'/>
            <Button className='border-[2px] border-transparent hover:border-[2px] hover:border-white duration-300' size='large' type='primary'>Like(0)</Button>
        </div>
    </nav>
  )
}

export default Navbar