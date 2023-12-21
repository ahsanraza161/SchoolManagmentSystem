import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import './hamburger.css'
const Hamburger = () => {
  const [Sidebar, Setsidebar] = useState(false)
  const SetSidebar = () => {
    Setsidebar(!Sidebar)
  }
  return (
    <div>
      <header>
        <Container fluid>
          <div className='sidebar' style={{ left: Sidebar ? '-100%' : '0%' }}>
            <ul>
              <li>
                Dashboard
                <ul>
                  <li>sadsd</li>
                  <li>asdsad</li>
                  <li>asdsad</li>
                </ul>
              </li>
              <li>sadsd</li>
              <li>asdsad</li>
              <li>asdsad</li>
              <li>home</li>
              <li>sadsd</li>
              <li>asdsad</li>
              <li>asdsad</li>
            </ul>
          </div>
          <div className='menu' onClick={SetSidebar}>
            <i class='fa-solid fa-bars'></i>
          </div>
        </Container>
      </header>
    </div>
  )
}

export default Hamburger
