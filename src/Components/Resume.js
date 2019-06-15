import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        var imageLoc = "images/" + education.icon;
        return <div key={education.school}>
          <a href={education.link}><img src={imageLoc} alt="Education Icon" style={{float:"left"}}/><h3>&nbsp;{education.school}</h3></a>
          <p className="info">&nbsp;{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        var imageLoc = "images/" + work.icon;
        return <div key={work.company}>
            <span><a href={work.link}><img src={imageLoc} alt="Work Icon" style={{float:"left"}}/><h3>&nbsp;{work.company}</h3></a></span>
            <span>
              <br />
              <h2 className="info">&nbsp;{work.title}</h2>
              <p className="info"><em className="date">{work.years}</em> <span>&bull;</span> <em>{work.location}</em></p>
            </span>
        </div>
      })
    }

    return (
      <section id="resume">

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

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
         </div>
      </div>

      </section>
    );
  }
}

export default Resume;
