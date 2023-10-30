import { useState } from "react";
import web1 from "../Components/images/web1.png"
import {AiOutlineMenu , AiOutlineClose} from "react-icons/ai"
function Header(){
    const[ open ,Setopen]= useState(false);

    const getopen =()=>{
        Setopen(!open)
    }
    return(
        <div className="headerpr">
            <div className="logo">
                <img src={web1}/>
            </div>
            <div className="ulhead">
                <ul style={{display: `${ open == true? "block" :""}`}}>
                <p className="menclose"
            style={{ display: `${open == true ? "block" : "none"}`}}  onClick={getopen}>
            <AiOutlineClose/></p>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                   
                </ul>
                <div className="menuicon"
            style={{ display: `${open == false ? "block" : "none"}`}}   onClick={getopen}>
           
              <AiOutlineMenu/>
              </div>
            </div>
        </div>
    )
}
export default Header;