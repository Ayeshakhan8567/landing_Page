import Features from './components/features'
import Pricing from './components/pricing'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Testimonials from './components/testimonials'
import './App.css'

function App() {
  

  return (
   <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
     <Navbar/>
     <Hero/>
     <Features/>
     <Pricing/>
     <Testimonials/>
     <Footer/>
   </div>
  )
}

export default App
