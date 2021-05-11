import React from 'react';

class Contact extends React.Component {
    state = {  }
    render() { 
        return (
        <div id="contact" className="bg-dark">
            <div id="basic-inf">
                <p>My address: Hanoi, Vietnam</p>
                <p>My phone number: 0964475289</p>
            </div>
            <div id="contact-inf">
                <p>contact me via email: dtluat.125@gmail.com or facebook</p>
                <a href="https://www.facebook.com/profile.php?id=100006675345167"><i class="fab fa-facebook-square"></i></a>
            </div>
        </div> 
        );
    }
}
 
export default Contact;