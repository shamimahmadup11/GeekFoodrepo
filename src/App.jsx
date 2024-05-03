import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import './App.css'
import Footer from './Components/Footer'


function App() {

  return (
   
    <div className='flex align-middle justify-center flex-col overflow-x-hidden'>
      <Navbar/>
     <Body/>
     <Section2/>
     <Section3 />
     <Footer/>
    </div>
     
  
  )
}

export default App
