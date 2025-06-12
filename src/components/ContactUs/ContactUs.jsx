import './style.css';
import imageJob from '../../assets/image/image-job.png';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';

function ContactUs(){
    return(
        <section className="image-jobs-items mt-5">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                <div className="position-relative overflow-hidden text-white img-fluid rounded-5 d-flex align-items-center justify-content-center flex-column"
                    style={{
                        backgroundImage: `url(${imageJob })`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '600px',
                        minHeight: '300px',
                    }}>
                    <div className="image-jobs-items-text text-center">
                        <h5><span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px"}}>NEED HELP </span><br />WITH A PROJECT ?</h5>
                        <h6 className="mt-4">Whether it’s a small fix or a full renovation<br /> — we’ve got you covered.</h6>
                        <div className="d-flex justify-content-center">
                          <ButtonWhiteMain  href="" buttonText="Contact us"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default ContactUs;