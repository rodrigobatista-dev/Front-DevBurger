/* eslint-disable no-unused-vars */

import { Outlet, Navigate } from 'react-router-dom'

import { SideNaveAdmin } from '../../components/SideNaveAdmin'
import { Container } from './styles'

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburger:userData'),
  )

  return isAdmin ? (
    <Container>
      <SideNaveAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  )
}
