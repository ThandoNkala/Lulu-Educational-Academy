
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Nav from './Comp/Nav'
import Footer from './Comp/Footer'
import Admission from './Pages/Admission'
import Athletics from './Pages/Athletics'
import Newsroom from './Pages/Newsroom'


function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
       <Route path='/' element = {<HomePage/>}/>
       <Route path='/aboutus' element={<AboutUs />} />
       <Route path='/admission' element={<Admission />} />
       <Route path='/athletics' element={<Athletics />} />
        <Route path='/newsroom' element={<Newsroom />} />
    </Routes>
      <Footer/> 
    
    </>
  )
}





export default App
