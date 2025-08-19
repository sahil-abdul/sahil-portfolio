import { useState,useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Skill from "./pages/Skill";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificate from "./pages/Certificate";
import Contacts from "./pages/Conteact";
import Fotter from "./components/Fotter";
import AllProject from "./components/AllProject";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { duration } from "@mui/material";

function App() {
  const [isShow, setisShow] = useState(false);

  const run = () => {
    setisShow(!isShow)
  }

  useEffect(() => {
    AOS.init({
      duration:1500,
      once:true
    })
  },[])



  return (
    <>
      <div className={`w-full  h-screen ${isShow ? "hidden" : "block"}`}>
        <Header />
        <Main />
        <About />
        <Skill />
        <Projects fun={run} />
        <Certificate />
        <Contacts />
        <Fotter />
      </div>

      <div className={`w-full h-screen ${isShow ? "block" : "hidden"}`}>
        <AllProject fun = {run} />
      </div>
    </>
  );
}

export default App;
