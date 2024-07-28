import React from "react";
// import Menu from "./components/elements/Navbar"
//  import VortexDemoSecond from "./components/elements/vortex"
//  import Description from "./components/elements/Description"
// import InfiniteMovingCardsDemo from './components/elements/Infinitemovingcard';
// import Footer from "./components/elements/Footer"
// import BackgroundGradientDemo from "./components/elements/Product";

const VortexDemoSecond = React.lazy(() => import('./components/elements/vortex'));
const BackgroundGradientDemo = React.lazy(() => import('./components/elements/Product'));
const Menu = React.lazy(() => import('./components/elements/Navbar'));
const Description = React.lazy(() => import('./components/elements/Description'));
const InfiniteMovingCardsDemo = React.lazy(() => import('./components/elements/Infinitemovingcard'));
const Footer = React.lazy(() => import('./components/elements/Footer'));

  function App() {

  return (
    <div className="bg-[#000]">
    <Menu/>
    <VortexDemoSecond/>
    <Description/>
    <BackgroundGradientDemo/>
    <InfiniteMovingCardsDemo/>
    <Footer/>
 </div>
  )
}

export default App
