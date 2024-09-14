import React from 'react'
import { AppRoutes } from '../Routes/Routes'
import { Header } from '../Header/Header'

export const App = () => {
  return (
    <div className='app'>
        <Header/>
        <AppRoutes/>
    </div>
  )
}
