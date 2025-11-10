/* eslint-disable no-unused-vars */
import { SignOutIcon } from '@phosphor-icons/react'
import { useResolvedPath } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import { useUser } from '../../hooks/UserContext'
import { navLinks } from './navLinks'
import { Container, NavLink, Footer, NavLinkContainer } from './sryles'

export function SideNaveAdmin() {
  const { Logout } = useUser()
  const { pathname } = useResolvedPath()
  return (
    <Container>
      <img src={Logo} alt="Hamburger Logo DevBurger" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={Logout}>
          <SignOutIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  )
}
