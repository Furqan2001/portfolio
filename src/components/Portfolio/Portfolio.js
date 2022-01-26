import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  if (props.resumeData) {
    var projects = props.resumeData.portfolio.map((project) => {
      return (
        <div key={project.name} className="single-project">
          <div>
            <img alt={project.name} src={project.imgurl} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.name}</h5>
                <p>{project.description}</p>
                <a href={project.url} title={project.name} target="_blank">
                  Go to Website
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>

          <div id="portfolio-wrapper" className="projects-container">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
