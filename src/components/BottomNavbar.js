import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const BottomNavbar = () => {
  const Navigate = useNavigate();
  const { theme, setTheme, cid } = useContext(Context);

  return (
    <>
      <div className="z-10">
        <nav className={`fixed bottom-0 w-full h-[50px] flex items-center`} style={{ backgroundColor: `${theme === 'light' ? 'white' : 'black'}` }}>
          <ul className={`flex justify-evenly w-full text-${theme === 'light' ? 'black' : 'white'}`}>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate('/') }} title='Home'>
              <i className="fa-solid fa-house fa-lg my-2 "></i>
            </li>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate(`shorts/:id/${cid}`) }} title='Shorts'>
              <i className="fa-solid fa-play fa-lg my-2"></i>
            </li>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate('trending') }} title='Shorts'>
              <i className="fa-solid fa-fire fa-lg my-2"></i>
            </li>

            <li className='flex flex-col justify-center cursor-pointer' onClick={() => { Navigate('treasure') }} title='Shorts'>
              <i className="fa-solid fa-gem fa-lg my-2"></i>
            </li>

            <li className="flex items-center cursor-pointer" onClick={() => { theme === 'light' ? setTheme('dark') : setTheme('light') }}>
              <i className="fa-solid fa-sun fa-lg" title='Theme'></i>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}

export default BottomNavbar