import React from 'react'
import { menuItems } from '../utils/menuItems'


const Navigation = ({active, setActive}) => {
  return (
    <div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h2>John</h2>
            <p>Your Money</p>
        </div>
        <div>
            <ul>
                {menuItems.map(item => (
                    <li 
                    key={item.id} 
                    className={`flex gap-4 items-center ${active === item.id ? 'text-yellow-500' : ''}`}
                    onClick={() => setActive(item.id)}
                    >{item.icon}{item.title}</li>
                ))}
            </ul>
        </div>
        <div>
            <p>Sign Out</p>
        </div>
    </div>
  )
}

export default Navigation