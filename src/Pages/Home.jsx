import React from 'react'; 
import banner from '../assets/b.png'
import './Home.css'
import About from './About/About';
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import resume from '../assets/resume.pdf';


const Home = () => {
    return (
        <div className="container mt-5">
            <div className="container mt-5 mb-5 d-flex justify-content-between">
            <div className='mt-5'>
                <h1 className='mt-4'>JONIOR FRONTEND <br /> DEVELOPER</h1>
                <p className="mt-3">Hey, I'm Abdullah Ashik. A passionate Frontend Developer <br />
                My resume link is belew.
                 </p>
                 <a href={resume} download>
                 <button>Resume</button>
                 </a>
            </div>
            <div style={{width: '450px', height: '400px'}}>
                <img className='w-100 h-100' src={banner} alt="" />
            </div>
           
            
        </div>
        <hr />
        <About></About>
        <hr />
        <Project></Project>
        <hr />
        <Contact></Contact>
        </div>
        
    );
};

export default Home;