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
            {/* <div className="container my-5">
                <div className="row">

                    <div className="col-md-6">
                        <img src={project.image2  || '/src/assets/image/slaider/slaider1.jpeg'} className="img-fluid rounded mb-3" alt="Big Image" />
                    </div>
                    <div className="col-md-6">
                        <img src={project.image3 || '/src/assets/image/slaider/slaider2.jpeg'} className="img-fluid rounded mb-3" alt="Big Image" />
                    </div>
                </div>
            </div> */}
            <div className='project-detail-text mt-5'>
                <div className="container">
                    <div className="row">
                        <h3 className="fade-in-up"><span style={{ color: '#E77B2D', fontStyle: "italic", fontSize:"60px", fontWeight:"bold"}}>Before </span></h3>
                        <h4 className='' style={{fontSize:"15px",color: '#868181', fontStyle: "italic",maxWidth:"500px"}}>We undertake any task - from minor repairs to complete renovation of the entire premises. Each project is carried out with the utmost care and attention to detail.</h4>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-center text-center ">
                        {project.image ? (
                        <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center flex-column">
                            <h3 style={{fontSize:"15px",color: '#868181', marginBottom: '5px', fontWeight:"800"}} >Step 1</h3>
                            <img src={project.image} className="img-fluid rounded" alt="Картинка 1" style={{width:"400px", height:"300px", objectFit:"cover"}}/>
                        </div>
                        ):null}
                        {project.image2 ? (
                        <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center flex-column flex">
                            <h3 style={{fontSize:"15px",color: '#868181', marginBottom: '5px', fontWeight:"800"}}>Step 2</h3>
                            <img src={project.image2} className="img-fluid rounded" alt="Картинка 2"  style={{width:"400px", height:"300px", objectFit:"cover"}}/>
                        </div>
                        ):null }
                        {project.image3 ? (
                        <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center flex-column">
                            <h3 style={{fontSize:"15px",color: '#868181', marginBottom: '5px', fontWeight:"800"}}>Step 3</h3>
                            <img src={project.image3} className="img-fluid rounded" alt="Картинка 3"  style={{width:"400px", height:"300px", objectFit:"cover"}}/>
                        </div>
                        ):null}
                    </div>
                </div>
                       
            </div>
            <div className='project-detail-text mt-5'>
                <div className="container">
                    <div className="row">
                        <h3 className="fade-in-up"><span style={{ color: '#E77B2D', fontStyle: "italic", fontSize:"60px", fontWeight:"bold"}}>After</span></h3>
                        <h4 className='' style={{fontSize:"15px",color: '#868181', fontStyle: "italic",maxWidth:"500px"}}>We undertake any task - from minor repairs to complete renovation of the entire premises. Each project is carried out with the utmost care and attention to detail.</h4>
                    </div>
                </div>
                
                <div className="container mt-4">
                    <div className="row justify-content-center text-center align-items-center">
                        {project.image_after ? (
                        <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center flex-column">
                            <h3 style={{fontSize:"15px",color: '#868181', marginBottom: '5px', fontWeight:"800"}}>Step 1</h3>
                            <img src={project.image_after} className="img-fluid rounded" alt="Картинка 1" style={{width:"400px", height:"300px", objectFit:"cover"}}/>
                        </div>
                        ):null}
                        {project.image_after2 ? (
                        <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center flex-column">
                            <h3 style={{fontSize:"15px",color: '#868181', marginBottom: '5px',fontWeight:"800"}}>Step 2</h3>
                            <img src={project.image_after2} className="img-fluid rounded" alt="Картинка 2" style={{width:"400px", height:"300px", objectFit:"cover"}}/>
                        </div>
                        ):null}
                        {project.image_after3 ? (
                        <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center flex-column">
                            <h3 style={{fontSize:"15px",color: '#868181', marginBottom: '5px',fontWeight:"800"}}>Step 3</h3>
                            <img src={project.image_after3} className="img-fluid rounded" alt="Картинка 3" style={{width:"400px", height:"300px", objectFit:"cover"}}/>
                        </div>
                        ):null}
                    </div>
                </div>
                       
            </div>
          
        </>
       
    );
}
export default DetailViews;