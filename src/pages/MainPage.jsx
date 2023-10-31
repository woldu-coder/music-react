import React from 'react';
import { Header, Navbar, Login, Services, Footer } from './components'

const MainPage = () => {
  return (
    <div className='main__page'>
        <Navbar />
        <Header />
        <Services />
    </div>
  )
}

export default MainPage