import React from 'react'
import './NavBar2.css'
import { Link } from 'react-router-dom'

function NavBar2() {
  return (
    <nav className='home_nav'>
      <Link  to="/" className='home_link'>View All</Link>
      <Link  to="/" className='home_link'>Women Western</Link>
      <Link  to="/" className='home_link'>Jewellery & Accessories</Link>
      <Link  to="/" className='home_link'>Men</Link>
      <Link  to="/" className='home_link'>Beauty & Health</Link>
      <Link  to="/" className='home_link'>Bath & Body</Link>
      <Link  to="/" className='home_link'>Bags & Footwear</Link>
      <Link  to="/" className='home_link'>Home & Kitchen</Link>
      <Link  to="/" className='home_link'>Kids</Link>
      <Link  to="/" className='home_link'>Electronics</Link>
    </nav>
  )
}

export default NavBar2;