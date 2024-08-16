import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
import Header from "../src/components/Header/Header"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Courses from './pages/courses/Courses';
import Footer from './components/footer/Footer';
import About from './pages/About/About';
import Account from './pages/Account/Account';
import { useUserData } from './Context/UserContext';
import Loading from './components/Loading/Loading';
import CourseDescription from './pages/Description/CourseDescription';
import PaymentSuccess from './pages/paymentsuccess/PaymentSuccess';
import Dashboard from './pages/dashboard/Dashboard';
import CourseStudy from "../src/pages/coursestudy/CourseStudy"
import AdminDashboard from './admin/Dashboard/AdminDashboard';
import Lecture from "../src/pages/lecture/Lecture"
import AdminCourses from "../src/admin/Courses/AdminCourses"
import AdminUsers from "../src/admin/User/AdminUsers"


const App = () => {
  
  const { isAuth , user , loading} = useUserData();
  return (
<>   {loading?<Loading/>:<BrowserRouter>
      <Header isAuth={isAuth} />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/account" element={isAuth ? <Account user={user} /> : <Login/>} />
            <Route path="/login" element={ isAuth ? <Home /> : <Login />} />
            <Route path="/register"   element={isAuth ? <Home /> : <Register />}/>
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route
              path="/course/:id"
              element={isAuth ? <CourseDescription user={user} /> : <Login />}
            />
 <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            />

<Route
              path="/:id/dashboard"
              element={isAuth ? <Dashboard user={user} /> : <Login />}
            />

<Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />

<Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            />
   <Route
              path="/admin/dashboard"
              element={isAuth ? <AdminDashboard user={user} /> : <Login />}
            />

<Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            />
            <Route
              path="/admin/users"
              element={isAuth ? <AdminUsers user={user} /> : <Login />}
            />



      </Routes>
<Footer/>
    </BrowserRouter>}
    </>

  )
}

export default App
