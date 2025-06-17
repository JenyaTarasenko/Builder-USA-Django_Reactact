import './style.css';
import StyleCard from '../../assets/image/style-card.svg';
import manStyle from '../../assets/image/man-style.svg';
import ButtonCallNowBlack from '../ButtonCallNowBlack/ButtonCallNowBlack';
import { useNavigate } from 'react-router-dom';

function AboutJobSection(){
    const navigate = useNavigate();
    return(
        <section className="about-job mt-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="about-job-container-column-center d-flex flex-row flex-wrap gap-2 justify-content-center">
                        {/* переход на страничку all-projects */}
                        <div className="about-job-car-one" onClick={()=>navigate('/projects-all')}>
                            <div className="about-job-car-one-container px-5 mt-5">
                                <h6>All Projects by Our Team</h6>
                                <h5 className="mt-3">A showcase of the construction and renovation work we've successfully completed across Michigan.</h5>
                            </div>
                        </div>
                        <div className="about-job-car-one-items d-flex flex-row gap-2 flex-wrap justify-content-center">
                            {/* переход на блок slider-review по id  */}
                            <div className="about-job-car-one-items-one d-flex flex-column align-items-start" onClick={()=>{
                                const element =  document.getElementById('slider-review');
                                if(element){
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                <div className="justify-content-center mt-4 px-3">
                                    <img src={manStyle} />
                                    <p className="mt-2" style={{fontSize: '13px',  color:'#fff'}}>Many people trust us and are satisfied with the results.</p>
                                </div>
                                <h6 className="px-3 mt-5">Reviews from our clients</h6>
                            </div>
                            <div className="about-job-car-one-items-two d-flex justify-content-center" onClick={()=>{
                                const element =  document.getElementById('textboxmain');
                                if(element){
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}>
                                <h6 className="px-3 mt-5">Why us ?</h6>
                                <img src={StyleCard} class="style-card-grey"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mt-3">
                    <div className="about-job-container-column-center-top d-flex justify-content-start flex-column">
                        <div className="px-4 mt-5">
                            <h5>Questions for our<br />team ?</h5>
                        </div>
                        <div className="d-flex flex-row flex-wrap px-4 mt-3 text-md-start align-items-center justify-content-md-start justify-content-center">
                            <h6>Our team is committed to continuously<br />improving the quality of our work.</h6>
                            <div className="ps-md-5 mt-2">
                                <ButtonCallNowBlack  href=" #question" buttonText="View" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutJobSection;