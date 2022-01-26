import React from "react";

function About(props) {
  let resumeData = props.resumeData;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://www.upwork.com/profile-portraits/c1BqzSqJFQqh59uxqvTxfIVG6THybnzi8oak2381ZNLW56zXpXU_garP87oXqknT80"
            alt=""
          />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
