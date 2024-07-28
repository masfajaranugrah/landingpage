import Menu from "./components/elements/Navbar"
import HeroParallaxDemo from "./components/elements/Hero"
import VortexDemoSecond from "./components/elements/vortex"
import Product from "./components/elements/Product"
import Description from "./components/elements/Description"
import InfiniteMovingCardsDemo from './components/elements/Infinitemovingcard';
import Footer from "./components/elements/Footer"
  function App() {
 
  return (
    <div className="bg-[#000]">
    <Menu/>
     <VortexDemoSecond/>
     <Description/>
   
    <HeroParallaxDemo/>
    <Product/>
 
    <InfiniteMovingCardsDemo/>
    <Footer/>
 </div>
  )
}

export default App
