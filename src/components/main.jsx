import React from "react";
export default function Main(){
  return(  <div className="main">
        <div className="intro">
            <h2 className="name">Mohit Wadhwani</h2>
            <h4 className="profession">Full-Stack Developer</h4>
        </div>
        <div className="links">
            <a className="email" href="#"><img src="email.png" className="email-logo"/><h4>Email</h4></a>
            <a className="linkedin" href="https://www.linkedin.com/in/mohit-wadhwani-36540a25b/" target="_blank"><img src="linkedin.png" className="linkedin-logo"/><h4>Linkedin</h4></a>
        </div>
        <div className="info"> 
            <h2 className="about">About</h2>
            <p className="about-section">I am a Full Stack developer with java as my main technology. I have also learnt mysql for DBMS , HTML CSS Javascript. I try to learn new things and have interest in coding.</p>
            <h2 className="interest">Interest</h2>
            <p className="interest-section">Other than coding i also have interest in photography and photo and video editing. I also like to watch anime and Sci-fi series.I also like to play table tennis.</p>
        </div>

    </div>
  )
}
