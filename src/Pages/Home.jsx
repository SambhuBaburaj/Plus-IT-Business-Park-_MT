import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Content from '../components/Navbar/Content'
import { Outlet, useLocation } from "react-router-dom";

function Home() {
const navigate=useNavigate()
  return (
<>
<Navbar />
<Content>
<Outlet />
</Content>
</>
  )
}

export default Home