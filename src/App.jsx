

import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import './App.css'

import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Header from '../components/Header'
import DashboardPage from '../pages/DashboardPage'
import PrivateRoute from '../components/PrivateRoute'
import CreateBook from '../pages/CreateBook'
import Comment from '../pages/Comment'
import Like from '../pages/Like'
import NotFound from '../pages/NotFound'

function App() {

  return (

    <>
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path='/dashboard/' element={<DashboardPage />} >
               <Route path="createBook" element={<CreateBook />} /> 
               <Route path="comment" element={<Comment />} /> 
              <Route path="like" element={<Like />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />}  />

        </Routes>

      </BrowserRouter>
    </>

  )
}
export default App
