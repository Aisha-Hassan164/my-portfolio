import {BsTelephoneFill} from "react-icons/bs"
import {AiOutlineMail ,AiFillGithub} from "react-icons/ai"
import {ImLocation} from "react-icons/im"
import {SiBehance} from "react-icons/si"
function contact()
{
    return (
        <section id="contact">
            <h1 className="textcont"> Contact Me</h1>
            <div className="container">
           <div className="contalast">
           < div className="contac">
                    <div className="icons">  
                    <BsTelephoneFill className="bs"/>
                    </div>
                    <div className="labk">
                    <h2> Phone</h2>
                    <p> +252 617993837</p>
                    </div>
                </div>
                < div className="contac">
                    <div className="icons">  
                    <AiOutlineMail className="bs"/>
                    </div>
                    <div className="labk">
                    <h2> Email</h2>
                    <p> aishahasan164@gmail.com </p>
                    </div>
                </div>
                < div className="contac">
                    <div className="icons">  
                    <ImLocation className="bs"/>
                    </div>
                    <div className="labk">
                    <h2> Address</h2>
                    <p> Distract-kaaraan , Mogadishu Somali </p>
                    </div>
                </div>
           </div>
                
                <div class="inpcont">
                <div class="special">
                    <input type="text" name="name" placeholder="name" required/><br/>
                </div>
                <input type="text" name="Email" placeholder="Email" required/>
                <input type="text" name="subject" placeholder="subject" required/><br/>
                <textarea name="messege" rows="7" placeholder="messege" required/>
                <button class="btn" > Submit</button>
               </div>



            </div>

            <div class="foter">
            <h1> Fllow Us</h1>
            <div class="iconfoter">
               
               <a href="https://github.com/Aisha-Hassan164"> <AiFillGithub/></a>
               <a href="https://www.behance.net/aishahassan44">   <SiBehance/></a>
           
              
                <h3> Copyright © Aisha Hassan 2023 | All rights reserved </h3>
            </div>
        </div>
        </section>
    )
}
export default contact;