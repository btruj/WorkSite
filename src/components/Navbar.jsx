import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-[1500px] h-[8vh]' >
        <div className="flex items-center justify-between h-16 lg:h-20 bg-[#223]/30 rounded-b-3xl shadow-lg px-4">

          <div className="text-white text-xl sm:text-2xl">
            <a href="/hero" className="font-bold"><span>Bryan Trujillo</span></a>
          </div>

          <ul className="text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 text-2xl">
            <li className="p-2"><NavLink to="/hero" className="selected">Home</NavLink></li>
            <li className="p-2"><NavLink to="/about" className="text-black">About</NavLink></li>
            <li className="p-2"><NavLink to="/portfolio" className="text-black">Portfolio</NavLink></li>
            <li className="p-2"><NavLink to="/contact" className="text-black">Contact</NavLink></li>
          </ul>

        <div onClick={handleNav} className="block md:hidden text-white z-40">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? "z-30 text-gray-300 fixed h-[50%] left-0 top-0 w-full bg-[#202121] ease-in-out duration-500"
                                 : "fixed left-[-100%]"}>
            <h1 className="text-3xl gray-primary-color m-4">J. Doe</h1>
          <ul className="p-8 text-4xl ml-20">
            <li className="p-2"><NavLink to="/hero" className="selected">Home</NavLink></li>
            <li className="p-2"><NavLink to="/about" className="text-black">About</NavLink></li>
            <li className="p-2"><NavLink to="/portfolio" className="text-black">Portfolio</NavLink></li>
            <li className="p-2"><NavLink to="/contact" className="text-black">Contact</NavLink></li>
          </ul>
        </div>

        </div>
    </div>
  )
}

export default Navbar