import React from 'react';
import Typed from 'react-typed';

class Header extends React.Component {
    state = {  }
    render() { 
        return (
            <div id="header-wrapper">
                <div id='info'>
                    <h1 style={{textAlign: 'center'}}>My name is Luat</h1>
                    <h3 style={{textAlign: 'center'}}>A front-end web developer</h3>
                    
                <div className='typed-text-container'>
                <Typed
                    className="typed-text"
                    strings={["Hello", "Nice to meet you!", "Let's have a look at my portfolio!"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                </div>
                </div>
                
            </div>

        );
    }
}

export default Header;