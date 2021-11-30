import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/userSlice'

export const CreatePage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      CreatePage
      <button onClick={() => dispatch(removeUser())}>relog</button>
    </div>
  )
}
