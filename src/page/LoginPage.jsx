import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Login } from '../components/Login'

export const LoginPage = () => {
  return (
    <div>
      LoginPage
      <Login />
      <Link to='/register'> register </Link>
    </div>
  )
}
