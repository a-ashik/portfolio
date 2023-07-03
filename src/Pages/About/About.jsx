import React from 'react'; 
import about from '../../assets/n.jpg'
import './About.css'

const About = () => {
    return (
        <div className="container" >
        <h2 className="text-center mt-5">ABOUT ME</h2>
        <div className='d-flex justify-content-between mt-5 mb-5 about '>
            <div className=''>
                <div className='ml-5' style={{width: '300px', height: '250px'}}>
                    <img className=' w-100 h-100' src={about} alt="" />
                </div>
            </div>
            <div className=' mt-5'>
                <h4>ABOUT ME</h4>
                <p>I am a Frontend Developer with expertise in HTML,  CSS,  Bootstrap, <br /> Tailwind CSS, and various frameworks like React js,  Express js and <br /> Database MongoDB. As a junior  Forntend Developer i work so  <br /> many project.If you want to see my  project cheak project  <br /> section in my website.By continuously expanding my skill  <br />  set, I ensure I can deliver innovative solutions.</p>
            </div>
        </div>
        </div>
    );
};

export default About;