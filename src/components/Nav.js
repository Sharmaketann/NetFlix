import React, { useEffect, useState } from 'react'
import '../css/Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div>
      <div className={`nav ${show && 'nav__black'}`}>
        <img
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'
          alt='Neflix Logo'
        />
        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
          alt='logo'
        />
      </div>
    </div>
  )
}

export default Nav
