
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import About from "./About";
import Header from "./Header";
import Project from "./Projects";
import Service from "./Service";
import Skills from "./Skills";

function App(){
    return(
        <div className="app">

         <Header/>
    <Home/>
    <Service/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
        </div>
    )
}
export default App;