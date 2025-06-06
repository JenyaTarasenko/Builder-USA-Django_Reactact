import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../../src/utils/api';



function ListViews(){
    const[projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
      }, []);
    return(

        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.tehnology_project}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">Link</a>
                    <img alt={project.name} src={project.image} style={{width:'100px',height:'100px'}}/>
                    <Link to={`/projects/${project.slug}`}>Смотреть подробнее</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ListViews;