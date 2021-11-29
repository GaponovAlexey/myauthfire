import { Route, Routes } from 'react-router'
import { CreatePage } from './page/CreatePage'
import { HomePage } from './page/HomePage'
import { LoginPage } from './page/LoginPage'
import { RegisterPage } from './page/RegisterPage'

function App() {
  return (
    <div className='App'>
      <Routes path='/' element={<HomePage />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
