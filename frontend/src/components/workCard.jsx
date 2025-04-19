import React from 'react';

const WorkCard = ({ title, description, url }) => {
  return (
    <div className="projectcards">
      <h3 className="projecttitle">{title}</h3>
      <hr />
      <p className="projectdescription">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="projectlink">View Project</button>
      </a>
    </div>
  );
};

export default WorkCard;
