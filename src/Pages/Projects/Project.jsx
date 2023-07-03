import React from 'react'; 
import project1 from '../../assets/p1.png'
import project2 from '../../assets/p2.png'
import project3 from '../../assets/p3.png'

const Project = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mt-5 mb-5">PROJECTS</h2>
            <div className="d-flex justify-content-between">
                <div>
                    <div style={{width: '250px', height: '135px'}}>
                     <img className='w-100 p-100' src={project1} alt="" />
                    </div>
                    <h4>Language Learning website</h4>
                    <h5>Feature : <a href="https://language-platform-d69c3.web.app/" target="_blank">Live Website</a></h5>
                    <p>1. (student,istructor,admin) <br />    three role in this website</p>
                    <p>2. student can enrolled class</p>
                    <p>3. Instructor can add class</p>
                </div>
                <div>
                    <div style={{width: '250px', height: '135px'}}>
                     <img className='w-100 p-100' src={project2} alt="" />
                    </div>
                    <h4>Toy Marketplace Website</h4>
                    <h5>Feature : <a href="https://toy-world-712b6.web.app/" target="_blank">Live Website</a></h5>
                    <p>1. We can add a toy.</p>
                    <p>2. We can see my own added toy.</p>
                    <p>3. Also Blog page and all toy page added</p>
                </div>
                <div>
                    <div style={{width: '250px', height: '135px'}}>
                     <img className='w-100 p-100' src={project3}alt="" />
                    </div>
                    <h4>Chef serching website</h4>
                    <h5>Feature : <a href="https://chef-area.web.app/" target="_blank">Live Website</a> </h5>
                    <p>1. login and registration system added</p>
                    <p>2. We can see chef details</p>
                    <p>3. Also added blog page</p>
                </div>

            </div>
        </div>
    );
};

export default Project;