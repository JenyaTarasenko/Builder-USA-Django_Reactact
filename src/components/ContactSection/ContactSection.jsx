import './style.css';
import Image  from '../../assets/image/contactUs5.jpg';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';


function ContactSection(){
    return(
        <section className="image-contact-section mb-3" style={{marginTop:'70px'}} >
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                <div className="position-relative overflow-hidden text-white img-fluid rounded-5 d-flex align-items-center justify-content-center flex-column"
                    style={{
                        backgroundImage: `url(${Image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '600px',
                        minHeight: '300px',
                    }}>
                    <div className="image-jobs-items-text text-center">
                        <h5><span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px"}}>NEED HELP </span><br />WITH A PROJECT ?</h5>
                        <h6 className="mt-5"  style={{ color: '#ffc107',fontSize:"30px", textTransform:'uppercase', fontWeight:'900'}}><span style={{fontStyle: "italic" , color:'#FFFFFF', fontSize:'35px'}}>All types</span> of construction<br /><span style={{fontStyle: "italic" , color:'#FFFFFF', fontSize:'35px'}}>work</span></h6>
                        <div className="d-flex justify-content-center">
                        <ButtonWhiteMain  link="tel:2314397166"  buttonText="Contact us"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default ContactSection;