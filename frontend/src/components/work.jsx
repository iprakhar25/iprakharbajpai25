import React, { useEffect, useState } from 'react';
import WorkCard from './workCard';
import { fetchGitHubProjects } from '../utils/api';

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchGitHubProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <section id="work" className="section">
      <h2 className="text-2xl font-bold text-white">projects</h2>
      <div id="work-items">
        {projects.map((project, index) => (
          <WorkCard 
            key={index} 
            title={project.name} 
            description={project.description} 
            url={project.url} 
          />
        ))}
      </div>
      <hr/>
      <p>see more</p>
      <br />
    </section>
  );
};

export default Work;