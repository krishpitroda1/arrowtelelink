import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Privacy from "./components/Privacy";
import End from './components/End';
import WA from "./components/WA";
import A2p from "./components/A2p";
import Voice from "./components/Voice";
import Error from "./components/Error";
import Consultancy from "./components/Consultancy";
import Technology from "./components/Technology";
import Hr from "./components/Hr";
import Jobs from "./components/Jobs";
// import Particles from "./components/Particle";
import Managehubs from "./components/Managehubs";
import { Route, Routes } from "react-router-dom";
import ParticleBackground from "./components/ParticlesBackground";
import HashLoader from "react-spinners/HashLoader";
 import { useState} from "react";
import { keyframes } from "styled-components";
import Carrers from "./components/Carrers";
import PulseLoader from 'react-spinners/PulseLoader'
function App() {
  const override={
    display: "block",
    margin: "0 auto",
    position:'absolute',
    width:"100%",
    height:"100vh",
    }
   


  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#1cbd68");
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },2000)
  },[])

  useEffect(() => {


    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
   <div>
    {
      loading ? <HashLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader" 
    />: 
    <div>
    <Navbar />
   {/* <ParticleBackground/> */}
    <div className="container mt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/WA" element={<WA/>} />
        <Route path="/Jobs" element={<Jobs/>} />
        <Route path="/Managehubs" element={<Managehubs/>}/>
        <Route path="/Hr" element={<Hr/>}/>
        <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Consultancy" element={<Consultancy/>}/>
        <Route path="/A2p" element={<A2p/>}/>
        <Route path="/Voice" element={<Voice/>}/>
        <Route path="/Carrers" element={<Carrers/>}/>
       
        <Route path="/Privacy" element={<Privacy/>} />
        <Route path="*" element={<Error/>} />
         </Routes>
    </div>
    <End className="absolute"/>
  </div>

    }
    </div>
  
  );
}

export default App;
