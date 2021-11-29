import { signInWithEmailAndPassword, getAuth } from '@firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getUser } from '../redux/userSlice'
import { Form } from './Form'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandleButton = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(getUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
      })
      .catch(() => {
        alert('invalid user')
      })
    navigate('/')
  }
  return (
    <div>
      <h3>Login</h3>
      <Form HandleButton={HandleButton} title={'login'} />
    </div>
  )
}
