import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
<nav id="navbar" className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="logo192.png" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#header-wrapper">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#certifications">Certifications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects" >Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
         );
    }
}
 
export default Navbar;