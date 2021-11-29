import React from 'react'
import { Link } from 'react-router-dom'
import { MyUser } from '../hooks/myUser'
import { CreatePage } from './CreatePage'
import { LoginPage } from './LoginPage'

export const HomePage = () => {
  const { isAuth } = MyUser()
  return (
    <div>
      {isAuth}
      <h1>
        <Link to='/'>Home Page</Link>
      </h1>
      <div>{!isAuth ? <LoginPage /> : <CreatePage />}</div>
    </div>
  )
}
