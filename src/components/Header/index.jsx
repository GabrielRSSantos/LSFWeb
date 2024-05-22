import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <div
      style={{
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: '#00014E',
        borderBottom: '1px solid #ccc'
      }}
    >
      <FaBars color='#FFFFFF' onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </div>
  )
}

export default Header