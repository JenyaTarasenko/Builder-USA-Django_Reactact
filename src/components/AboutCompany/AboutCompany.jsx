import './style.css';
import aboutImage from '../../assets/image/about.png';

function AboutCompany(){
    return(
        <section className="project-detail" style={{marginTop: '70px'}}>
            <div className="container">
                <div className="row justify-content-center"> 
                    <img src={aboutImage} class="img-fluid" style={{height: '500px', objectFit: 'cover', borderRadius: '40px'}} />
                </div>
            </div>
        </section>
    );
}
export default AboutCompany;