import React from "react";
import boy from './boy.png';

function Technology(){
    return(<>
    <h2 className="tech-head">5 ways to animate a React app.</h2>
    <div className="tech-icons">
        <img className="boy-img" src={boy}></img>
        <span className='tech-name'>Dimitry Nozhenko</span>
        <span ><i class="fab fa-facebook-square"></i></span>
        <span ><i class="fab fa-instagram"></i></span>
        <span ><i class="fab fa-twitter-square"></i></span>
        <span ><i class="fab fa-youtube"></i></span>
    </div>


    </>);
}
export default Technology;