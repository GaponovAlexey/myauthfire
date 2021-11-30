import React from 'react'
import { Form } from './Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { getUser } from '../redux/userSlice'


export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const HandleButton = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(getUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
      })
      .catch((error) => {
        console.log(error)
      })
    navigate('/')
  }

  return (
    <div>
      <h3>Register</h3>
      <Form title='register' HandleButton={HandleButton} />
    </div>
  )
}
