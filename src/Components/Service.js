import {FaCode , FaVideo} from "react-icons/fa"
import {FiPenTool} from "react-icons/fi"

function Service(){
    return(
        <section id="service">
            <div className="flexserv">
            <div className="serve">
                <div className="icons">
                <button className="btn1"> <FaCode/></button>
                </div>
                <div className="textser">
                <h2> Web and <br/> Mobile Development</h2>
                </div>
               
            </div>
            <div className="serve">
                <div className="icons">
                <button className="btn1"> <FiPenTool/></button>
                </div>
                <div className="textser-three">
                <h2>  Graphic <br/>Design </h2>
                </div>
               
            </div>
            <div className="serve">
                <div className="icons">
                <button className="btn1"> <FaVideo/></button>
                </div>
                <div className="textser-three">
                <h2>  Video <br/>Editing</h2>
                </div>
               
            </div>
           
            </div>
        </section>
    )
}
export default Service;