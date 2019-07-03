import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var email = "mailto:"+this.props.data.email;
    }

    return (
      <section id="contact">

                  <div>
                      <img src="images/headshot.png" alt="Portrait" className="portrait"/>
	                  <p className="mailTo">                  
	                     <a href={email} target="_blank"  rel="noopener noreferrer" className="button"><i className="fa fa-envelope"></i> Get In Touch</a>
	                  </p>
            	  </div>
         <div className="row section-head">
            <div className="two columns header-col">
            </div>
            <div className="seven columns">
            </div>

         </div>
   </section>
    );
  }
}

export default Contact;
