import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
// components
import Header from './components/Header'
import Footer from './components/Footer'
// pages
import Home from './Pages/frontend/Home/index'
import Menu from './Pages/frontend/Menu/index'
import About from './Pages/frontend/About/index'
import Services from './Pages/frontend/Services/index'
import Contact from './Pages/frontend/Contact/index'
import Routes from './Pages/Routes'
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useState,useEffect } from 'react';
function App() {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
          setUser(user);
        } else {
          // User is signed out
          // ...
        }
      });
},[])
if(user===null){
  return(
<>
    <Login/>
    {/* <Home/> */}
    {/* <Register/> */}
    </>
  )
}

  return (
    <>
    
    <Routes/> 
     {/* <Header/>
    <main>
      <Home/>
      <About/>
      <Menu/>
      <Services/>
      <Contact/>
    </main>
    <Footer/> */}
        </>

  );
}

export default App;
