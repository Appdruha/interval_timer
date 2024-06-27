import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home.tsx'

export const RootRouter = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
    </Routes>
  )
}