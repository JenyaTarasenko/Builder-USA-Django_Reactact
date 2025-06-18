import './style.css';
import mainImageProjects from '../../assets/image/projects.png';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';


function ProjectsMain(){
    return(
        <section style={{marginTop: '70px',   backgroundImage: `url(${ mainImageProjects})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '700px', minHeight: '300px',  borderRadius: '20px'}}>
            <div className="position-relative overflow-hidden text-white main-style-section">
                <div className="position-relative d-flex justify-content-between align-items-center flex-wrap">
                    <div className="left-column">
                        <h1 className="fade-in-up"><span style={{ color: '#ffc107', fontStyle: "italic"}}>Professional Building</span> & Remodeling Services</h1>
                        <h2 className="fade-in-up delay-1">We provide a full range of construction services across Michigan — from residential renovations to large-scale commercial projects.</h2>
                            <ButtonWhiteMain  link="tel:2314397166" buttonText="Contact us" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProjectsMain;