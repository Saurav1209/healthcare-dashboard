import React from 'react'
import '../Styles/navbar.css'
function navbar() {
  return (
    <div className='nav'>
    <div className='testLogo'></div>
    <div className='nav-ele-box'>
        <div className='nav-ele-home-img'></div>
        <div className='nav-ele-over'>Overview</div>
        <div className='nav-ele-user-img'></div>
        <div className='nav-ele-cal-img'> </div>
        <div className='nav-ele-msg-img'> </div>
        <div className='nav-ele-tran-img'> </div>
        
    </div>
    <div className='nav-right'>
        <div className='login-img'></div>
        <div className='login-name'>Dr. Jose Simmons</div>
        <div className='login-name-prac'> Genral Practitioner</div>
        <div className='ver-line'></div>
        <div className='settings'></div>
        <div className='options'></div>
    </div>
    </div>
  )
}

export default navbar
