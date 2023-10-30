import webs from "../Components/images/webs.jpg"
import twebsitefir  from "../Components/images/twebsitefir.jpg"
import elwrning  from "../Components/images/elwrning.jpg"
function Project(){
    return(
        <section id="project">
            <div className="project">
        <h1> Projects</h1>
        <p class="projectsss"> I have worked on many projects, here are some of my favorites.</p>
       <div className="fleprojrc">
       <div className="porfo">
       <a href="https://maqayda-aisha-hassan-husseins-projects.vercel.app/"> <img src={webs}/> </a>
            
            {/* <h3>  Madina Hospital  </h3>
                <p> Madina hispital that is based in Mogadishu, Somaalia one of Mogadishu’s two major hospitals, sits in a spacious compound in
                     the western part of the capital. It focuses on trauma and emergency maternal medicine
                    I built the website using Html, css , Javascript. 
                </p>
                <button className="btn22"> View project</button> */}
        </div>
       <div className="porfo">
       <a href="https://aisha-hassan164.github.io/Hospital-website/"> <img src={twebsitefir}/> </a>
            
            {/* <h3>  Madina Hospital  </h3>
                <p> Madina hispital that is based in Mogadishu, Somaalia one of Mogadishu’s two major hospitals, sits in a spacious compound in
                     the western part of the capital. It focuses on trauma and emergency maternal medicine
                    I built the website using Html, css , Javascript. 
                </p>
                <button className="btn22"> View project</button> */}
        </div>
       <div className="porfo">
       <a href="https://e-lerning-psi.vercel.app/">  <img src={elwrning}/> </a>
           
            {/* <h3>  Madina Hospital  </h3>
                <p> Madina hispital that is based in Mogadishu, Somaalia one of Mogadishu’s two major hospitals, sits in a spacious compound in
                     the western part of the capital. It focuses on trauma and emergency maternal medicine
                    I built the website using Html, css , Javascript. 
                </p>
                <button className="btn22"> View project</button> */}
        </div>
       
       </div>
        </div>
        </section>
    )
}
export default Project;