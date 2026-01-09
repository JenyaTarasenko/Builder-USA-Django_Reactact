import './style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../../src/utils/api';


function ListViews(){
    const[projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
      }, []);
    return(
        <section className="projects mt-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                {projects.map(project => (
                    <div key={project.id}  className="card"  style={{ width: '320px' }}>
                        <Link to={`/projects/${project.slug}`}>
                            <img src={project.image} alt={project.name}  style={{ height: '400px', objectFit: 'cover', borderRadius:'30px' }}/>
                        </Link>  
                        <div className="card-body">
                            <div className="card-text">
                                <h5>{project.name}</h5>
                            </div>
                        </div>
                    </div> 
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListViews;