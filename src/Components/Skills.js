import {AiFillHtml5} from "react-icons/ai"
import {FaCss3} from "react-icons/fa"
import {GrReactjs} from "react-icons/gr"
import {SiExpress,SiAdobephotoshop,SiAdobeillustrator,SiAdobeindesign,SiAdobepremierepro} from "react-icons/si"
import {BiLogoJavascript ,BiLogoNodejs ,BiLogoFlutter} from "react-icons/bi"
function Skills(){
    return(
        <section id="skills">
                <div class="main-container">
            <div class="child-container">
                <h1 class="child-title"> Skills</h1>
                <div class="skil-grid">
                    <div class="smal-container">
                    <AiFillHtml5 className="html-clas"/>
                        <h3> HTML</h3>
                    </div>
                    <div class="smal-container">
                    <FaCss3 className="html-clas"/>
                        <h3> CSS</h3>
                    </div>
                    <div class="smal-container">
                    <BiLogoJavascript className="html-clas"/>
                        <h3> Javascript</h3>
                    </div>
                    <div class="smal-container">
                    <GrReactjs className="html-clas"/>
                        <h3> React js</h3>
                    </div>
                    <div class="smal-container">
                          <BiLogoNodejs className="html-clas"/>
                            <h3> Node js</h3>
                        </div>
                        <div class="smal-container">
                        <SiExpress className="html-clas"/>
                            <h3> Express </h3>
                        </div>
                        <div class="smal-container">
                            <p className="html-clas"> Mdb</p>
                            <h3> Mongoodb</h3>
                        </div>
                        <div class="smal-container">
               <BiLogoFlutter className="html-clas"/>
                            <h3>  flutter</h3>
                        </div>
                        <div class="smal-container">
                            <SiAdobephotoshop className="html-clas"/>
                                <h3> Adobe Photoshop</h3>
                            </div>
                            <div class="smal-container">
                               <SiAdobeillustrator className="html-clas"/>
                                <h3> Adobe Illustrator </h3>
                            </div>
                            <div class="smal-container">
                               <SiAdobeindesign className="html-clas"/>
                                <h3> Adobe Indesign</h3>
                            </div>
                            <div class="smal-container">
                                <SiAdobepremierepro className="html-clas"/>
                                <h3>  Adobe Premeir pro</h3>
                            </div>
                        
                </div>
            </div>
        </div>
        </section>
    )
}
export default Skills;