import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AlgoDetails from './Home/AlgoDetails'
import Profile from './Profile/Profile'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algorithm/:algoId" element={<AlgoDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}