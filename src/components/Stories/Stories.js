import React from 'react';

import './stories.css';



function Stories(){
    return(<>

    <h1 className="s-h1">Latest Stories</h1>
    <hr className="s-hr1"></hr>
    <hr className="s-hr2"></hr>
    <div className="s-div1">
    <div className="schild 1"><h2 >Catch waves with<br/> an adventure guide</h2>
    <p className="s-text">Gujarat is vastly underrated region of India and it's a mystery to us why the region isn’t more well-known as a tourist destination.
     There are a variety of temples and palaces.</p>
     <p>TECH <span className="s-span">/ Today at 11:54</span></p></div>
    <div className="schild 2"><h2 >Catch waves with<br/> an adventure guide</h2>
    <p className="s-text">Gujarat is vastly underrated region of India and it's a mystery to us why the region isn’t more well-known as a tourist destination.
     There are a variety of temples and palaces.</p>
     <p>STYLE <span className="s-span">/ Today at 1:54</span></p></div>
    <div className="schild 3"><h2 >Catch waves with<br/> an adventure guide</h2>
    <p className="s-text">Gujarat is vastly underrated region of India and it's a mystery to us why the region isn’t more well-known as a tourist destination.
     There are a variety of temples and palaces.</p>
     <p>TECH <span className="s-span">/ Today at 5:00</span></p></div>

    </div>
    <hr className="s-hr2"></hr>
     <p className="s-button">view more<i class="fas fa-arrow-right"></i></p>


    </>)
}
export default Stories;