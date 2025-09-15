import './style.css';
// import imageJob from '../../assets/image/image-job.png';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';
import { useInView } from "react-intersection-observer";

function ContactUs({image}){
    const { ref, inView } = useInView({
        triggerOnce: true, // анимация один раз
        threshold: 0.2     // 20% блока видимо — запускаем анимацию
    });

    const fadeInStyle = {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)", // плавное появление снизу
        transition: "opacity 1.3s ease-out, transform 1.2s ease-out"
    };
    return(
        <section className="image-jobs-items mt-5 mb-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                    <div className="position-relative overflow-hidden text-white img-fluid rounded-5 d-flex align-items-center justify-content-center flex-column"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '600px',
                            minHeight: '300px',
                        }}>
                        <div ref={ref} className="image-jobs-items-text text-center">
                            <h5 style={fadeInStyle}><span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px"}}>NEED HELP </span><br />WITH A PROJECT ?</h5>
                            <h6 className="mt-4">Whether it’s a small fix or a full renovation<br /> — we’ve got you covered.</h6>
                            <div className="d-flex justify-content-center">
                            <ButtonWhiteMain  link="tel:2314397166" buttonText="Contact us"/>
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