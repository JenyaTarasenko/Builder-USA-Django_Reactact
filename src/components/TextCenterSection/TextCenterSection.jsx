import './style.css';
import ManStyle  from '../../assets/image/man-style.svg';
import ButtonCallNowBlack from '../ButtonCallNowBlack/ButtonCallNowBlack';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function TextCenterSection(){
    const { ref, inView } = useInView({ triggerOnce: true });
    return(
        <section className="text-center-section mt-5 mb-3">
            <div className="container">
                <div className="row">
                    <div className="text-md-center  text-start">
                        <h5 className='fs-1  fw-bold text-uppercase' style={{ color: '#E77B2D', fontStyle: "italic" }}>Looking for help with repairs or<br/> renovations?</h5>
                        <h4 className="mt-3 text-dark">Our team will perform any type <br/> of work in a short time</h4>
                    </div>
                    <div className="text-center-column d-flex flex-row align-items-center justify-content-center gap-3">
                        <img src={ManStyle}  alt="img" />
                        <div className="border-start border-2 ms-3" style={{height: '50px'}}></div>
                        <div  ref={ref} className="column-text-right d-flex flex-column align-items-center">
                            <h5 className='text-dark'>{inView ? <CountUp end={100} duration={2} prefix="+"/> : "+0"}</h5>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                       <ButtonCallNowBlack  href="tel:2314397166"  buttonText="CALL US" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TextCenterSection;