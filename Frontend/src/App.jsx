import React from 'react'
import Login from './Login'
import Form from './Form'
import ForgetPassword from './ForgetPassword'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
    </Routes>
  )
}

export default App