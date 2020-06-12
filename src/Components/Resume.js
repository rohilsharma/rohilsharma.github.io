import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        var imageLoc = "images/" + education.icon;
        return <div key={education.school}>
          <a href={education.link} target="_blank" rel="noopener noreferrer"><img src={imageLoc} alt="Education Icon" style={{float:"left"}}/><h3>&nbsp;&nbsp;{education.school}<span className="info">&nbsp;&bull;&nbsp;{education.degree}</span></h3></a>
        </div>
      })

      var work = this.props.data.work.map(function(work){
        var imageLoc = "images/" + work.icon;
        return <div key={work.company}>
            <span><a href={work.link} target="_blank" rel="noopener noreferrer"><img src={imageLoc} alt="Work Icon" style={{float:"left"}}/><h3>&nbsp;&nbsp;{work.company}</h3></a></span>
              <br />
              <h2 className="info">&nbsp;{work.title}&nbsp;<span>&bull;</span><span>{work.location}</span></h2>

        </div>
      })
    }

    return (
      <section id="resume">
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Professional Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
         </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      </section>
    );
  }
}

export default Resume;
