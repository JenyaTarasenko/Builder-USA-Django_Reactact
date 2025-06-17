import './style.css';
import ManStyle  from '../../assets/image/man-style.svg';
import ButtonCallNowBlack from '../ButtonCallNowBlack/ButtonCallNowBlack';

function TextCenterSection(){
    return(
        <section className="text-center-section mt-5 mb-3">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h5>Looking for help with repairs or<br/> renovations?</h5>
                        <h4 className="mt-3">We handle all types of work — from small fixes to<br/> full-scale construction</h4>
                    </div>
                    <div className="text-center-column d-flex flex-row align-items-center justify-content-center gap-3">
                        <img src={ManStyle}  alt="img" />
                        <div className="border-start border-2 ms-3" style={{height: '50px'}}></div>
                        <div className="column-text-right d-flex flex-column align-items-center">
                            <h5>+100</h5>
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