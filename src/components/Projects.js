import React from 'react';

class Projects extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="projects">
                <h1>My Projects</h1>
                <div id="projects-container">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="random-quote-machine.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Quote machine</h5>
                            <p class="card-text">A machine that randomly generate quotes.</p>
                            <a href="#" class="btn btn-primary">Get there</a>
                        </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src="markdown-previewer.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Markdown previewer</h5>
                            <p class="card-text">A code editor and a formated previewer.</p>
                            <a href="#" class="btn btn-primary">Get there</a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;