import React from 'react';

class Certificates extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="certifications">
                <h1>My certifications and exp</h1>
                <div className="items-container">
                <div className="item">
                    <div className="circle"></div>
                    <p>Basic knowledge about HTML, CSS, JS and Reactjs</p>
                </div>
                <div className="item">
                    <div className="circle"></div>
                    <p>Basic knowledge of Bootsrap</p>
                </div>
                <div className="item">
                    <div className="circle"></div>
                    <p>Having experience in doing some simple responsive front-end projects</p>
                </div>
                <div className="item">
                    <div className="circle"></div>
                    <p>IELTS overall bandscore of 6.5</p>
                </div>

                </div>
            </div>
         );
    }
}
 
export default Certificates;