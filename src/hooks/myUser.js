import { useSelector } from 'react-redux'

export const MyUser = () => {
  const { email, id, token } = useSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
    id,
    token
  }
}
