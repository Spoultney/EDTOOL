import React from 'react'
import { Header, Logo } from './header'
import Menu from './nav'
import Commander from './Commander'
import Galnet from './Galnet'
import Footer from './Footer'
import CGs from './CGs'

const Mainpage = () => {
  return (
    <div className='layout'>
      <div className='header'>
        <Logo/>
        <Header/> 
      </div>
      <div className='menu'>
        <Menu/>
      </div>
      <div className='galnet'>
        <Galnet/>
      </div>
      <div className='cgs'>
        <CGs/>
      </div>
      <div className='commander'>
        <Commander/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>    
  )
}


export default Mainpage;