import React from 'react'
import { Container, Content } from './styles'
import { FaHome } from 'react-icons/fa'
import { MdOutlineMenuOpen } from "react-icons/md"
import SidebarItem from '../SidebarItem'
import { Link } from 'react-router-dom'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <div className='pt-5'>
        <button onClick={closeSidebar}>
          <SidebarItem Icon={MdOutlineMenuOpen} Text="Menu" />
        </button>
        <Link to="/home">
          <SidebarItem Icon={FaHome} Text="Pagina Inicial" />
        </Link>
        <Link to="/projects">
          <SidebarItem Icon={FaHome} Text="Projetos" />
        </Link>
        <Link to="/inauguration">
          <SidebarItem Icon={FaHome} Text="Inauguração" />
        </Link>
        <Link to="/perfil">
          <SidebarItem Icon={FaHome} Text="Perfil" />
        </Link>
      </div>
    </Container>
  )
}

export default Sidebar