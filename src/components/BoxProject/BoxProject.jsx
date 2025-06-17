import './style.css';
import BoxOne from '../../assets/image/box-text1.png';
import BoxTwo from '../../assets/image/painter3.png';
import BoxThree from '../../assets/image/box-gibs.png';
import {Link} from 'react-router-dom';


// номер и текст секции
function BoxProject(){
    return(
        <>
            <section className="project-image mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                            <Link to="#interior"><div className="project-image-container d-flex flex-column" style={{backgroundImage: `url(${BoxOne})`, borderRadius: '60px'}}>
                                <h4><span style={{ color: '#ffc107', fontStyle: "italic"}}>INTERIOR</span><br/>WORK</h4></div>
                            </Link>
                        </div>
                        <div className="col-md-6 d-flex flex-column gap-4 align-items-center align-items-md-start project-image-column-left">
                            <Link to="#painting"><div className="project-container-left d-flex flex-column" style={{backgroundImage: `url(${BoxTwo}`, borderRadius: '60px' }}>
                                <h4>INTERIOR AND<br/>EXTERIOR <span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px" }}>PAINTING</span></h4></div>
                            </Link>
                            <Link to="#exterior"><div className="project-container-left d-flex flex-column" style={{backgroundImage: `url(${BoxThree})`, borderRadius: '60px'}}>
                                <h5><span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px" }}>EXTERIOR</span><br/>WORK</h5></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default BoxProject;