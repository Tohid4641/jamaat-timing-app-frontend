import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RegisterMasjid from './pages/RegisterMasjid';
import { Route, Routes } from 'react-router-dom';
import UpdateMasjidTiming from './pages/UpdateMasjidTiming';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onOpenSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} onCloseSidebar={() => setIsSidebarOpen(false)} />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/updateMasjidTiming' element={<UpdateMasjidTiming />} />
        <Route path='/registerMasjid' element={<RegisterMasjid />} />
      </Routes>
    </>
  )
}

export default App