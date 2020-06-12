import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var resumeDownload = this.props.data.resumedownload;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

        <nav id="nav-wrap">

           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
  	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
  	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
              {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
           </ul>

        </nav>

        <div className="row banner">
           <div className="banner-text">
              <h2>Hi! I'm</h2>
              <h1 className="responsive-headline">{name}</h1>
              <hr />
              <div className="download">
                    <p>
                       <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i> View Resumé</a>
                    </p>
              </div>
              <ul className="social">
                 {networks}
              </ul>
           </div>
        </div>

        <p className="scrolldown">
           <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}

export default Header;
