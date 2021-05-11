import React from 'react';
class About extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="about-me" className="row">
                <div id="my-img" className="col-6">
                    <img src='photo.png'/>
                </div>

                <div id="about-content" className="col-6">
                    <h1>About me</h1>
                    I am just a student with great desire to work and to learn about tech 
                </div>
                
                
            </div>

                
         );
    }
}
 
export default About;