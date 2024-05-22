import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import './App.css'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Qoute from './Components/Qoute'
import Restrount from './Components/Restrount'
import Food from './Components/Food'

function App() {
  const router= createBrowserRouter([
    {
    path:"/",
    element:<>
    <Navbar/>
       <Body/>
        <Section2/>
        <Section3 />
         <Footer/>
         </>
    },
    {
      path:"/Qoute",
      element: <>
       <Navbar/>
       <Qoute/>
       <Footer/>
      </>
    },
    {
      path:"/Restrount",
      element: <>
       <Navbar/>
       <Restrount/>
       <Footer/>
      </>
    },
    {
      path:"/Food",
      element: <>
       <Navbar/>
       <Food/>
       <Footer/>
      </>
    },
   
  ])

  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;



