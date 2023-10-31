import React from 'react';
import "./App.css";
import { Navbar, Header, Footer, Login, Signup, Musics, About, NotFound } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoute from './utils/PrivateRoute';



const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className='app'>
        <Navbar />
          <div className='app__container'>
            <Routes>
              <Route path='/' element={ <Header />} /> 
              <Route element={ <PrivateRoute/> }>
                       
                  <Route path='/about' element={ <About />} />    
                  <Route path='/music/:id' element={ <Musics />} />    
                       
              </Route>        
              <Route path='/login' element={ <Login />} />          
              <Route path='/signup' element={ <Signup />} />
              <Route path="*" element={ <NotFound />} />           
            </Routes>
            
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App;