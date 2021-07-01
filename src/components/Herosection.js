import React from 'react' ;
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'; 

 function Herosection() {
     return (
        <div className='hero-container'>
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted/>  */}
            <h1>TimeWalker Engineering </h1>
            <p>Work with Us ?</p>
            <div className='hero-btns'> 
               
                <Button className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='gtn--large'>
                    GET STARTED
                </Button>
                
                <Button className='btn' 
                buttonStyle='btn--primary' 
                buttonSize='gtn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
     )
 }
 
 export default Herosection;
 