import React, { useRef } from 'react'
import { HomeModule } from '../HomeModule/HomeModule'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact'

export const Home = () => {


  return (
    <main>
      <HomeModule />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
