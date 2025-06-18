import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../../../src/utils/api';

const DetailViews =()=>{
    const{slug}= useParams();
    const[project, setProject]= useState(null);
    const [error, setError] = useState(null);

   useEffect(()=>{
    fetchProjects()
    .then(data=>{
        const found = data.find(proj => proj.slug === slug);
        if (found) {
            setProject(found);
        } else {
            setError('Проект не найден');
        }
    })
    .catch(err => {
        console.error(err);
        setError('Ошибка загрузки проекта');
    });
   },[slug]);
   if (error) return <div>{error}</div>
   if (!project) return <div>Загрузка</div>
    return(
        <>
            <div className="project-detail" style={{marginTop:'70px'}}>
                <div className="container">
                    <div className="row justify-content-center"> 
                        <img src={project.image} class="img-fluid" style={{height: '500px', objectFit: 'cover', borderRadius: '40px'}} />
                    </div>
                </div>
            </div>
            <div className="project-detail-text mt-5">
                <div className="container">
                    <div className="row">
                        <div className="text-detail-button">
                            <h1 style={{fontStyle: "italic"}}>{project.name}</h1>
                        </div>
                        <div className="text-detail-button-description mt-2">
                            <h2>{project.description}</h2>
                        </div>
                        <div className="text-detail-button-description mt-3">
                            <h2>{project.tehnology_project}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    {/* подменяет картинку если не загружена то   || '/src/assets/image/slaider/slaider1.jpeg' */}
                    <div className="col-md-6">
                        <img src={project.image2  || '/src/assets/image/slaider/slaider1.jpeg'} className="img-fluid rounded mb-3" alt="Big Image" />
                    </div>
                    <div className="col-md-6">
                        <img src={project.image3 || '/src/assets/image/slaider/slaider2.jpeg'} className="img-fluid rounded mb-3" alt="Big Image" />
                    </div>
                </div>
            </div>
        </>
       
    );
}
export default DetailViews;