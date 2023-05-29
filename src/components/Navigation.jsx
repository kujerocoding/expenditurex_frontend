import React from 'react'
import { menuItems } from '../utils/menuItems'
import Logo from '../assets/image/logo.png'
import Avatar from '../assets/image/avatar.png'
import { useGlobalContext } from '../context/globalContext'
import { balance } from '../utils/Icons'


const Navigation = ({active, setActive}) => {

    const {getTotalBalance} = useGlobalContext()

  return (
    <div className='bg-primary text-text flex flex-col m-4 p-4 rounded-xl gap-5'>
        <div className='w-32 mx-auto'>
           <img src={Logo} alt="logo" />
        </div>
        <div className='p-4 flex items-center gap-4 border-t-2 border-gray-500'>
            <div className='w-20 bg-text rounded-full overflow-hidden'>
                <img src={Avatar} alt="avatar"/>
            </div>
            <div>
                <h2 className='text-xl uppercase mb-2'>John</h2>
                <div className='flex gap-2'>
                    <div className='w-5'>{balance}</div>
                    <p className='text-green-500'>₱{getTotalBalance()}</p>
                </div>
            </div>
        </div>
        <div className='grow'>
            <ul className='flex flex-col gap-4 p-4'>
                {menuItems.map(item => (
                    <li 
                    key={item.id} 
                    className={`flex gap-4 items-center cursor-pointer p-2 rounded-md ${active === item.id ? 'text-primary bg-text font-bold' : ''}`}
                    onClick={() => setActive(item.id)}
                    ><span className='w-8 h-8'>{item.icon}</span>{item.title}</li>
                ))}
            </ul>
        </div>
        <div className='self-center'>
            <button className='self-end'>Sign Out</button>
        </div>
    </div>
  )
}

export default Navigation