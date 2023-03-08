import React from 'react'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className=" py-8">
<div className="container mx-auto">
  <div className='flex justify-between items-center z-40'>
 <a href="#">
  <img src={Logo} alt="my-logo"/>
 </a>
<button className='btn btn-sm'>Work with me </button>
  </div>
</div>

    </header>
)}

export default Header