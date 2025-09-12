import './style.css';
import instgram from '../../assets/image/Instagram-black.svg';
import facebook from '../../assets/image/Facebook-black.svg';
import location from '../../assets/image/Location.svg';

import ButtonFooter from '../ButtonFooter/ButtonFooter';
// import logo from '../../assets/image/logo-builder.png';
import logo from '../../assets/image/footer.png';

function Footer(){
    return(
        <section className="footer-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="footer-section-container d-flex flex-row flex-wrap mt-5">
                        <div className="col-md-6 col-12">
                            <div className="footer-container-right">
                                <img src={logo}  style={{width:'200px', height:"70px"}}  alt="footer-logo" />
                                <h5 className="mt-5">Professional Solutions for Home<br />Improvement and Renovation</h5>
                                <div className="footer-text-letter mt-5">
                                    <a href="#"><h5>231-439-7166</h5></a>
                                    <a href="#"><h6>alekfitkin@gmail.com</h6></a>
                                </div>
                                <div className="footer-icon-top d-flex flex-row gap-3 mt-3">
                                    <a href="#"><img src={instgram} alt="facebook-logo" class="footer-top-social" /></a>
                                    <a href="#"><img src={facebook} alt="Instagram-logo" class="footer-top-social" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="footer-container-left d-flex justify-content-center flex-column">
                                <h5 style={{textTransform:'uppercase',fontStyle: "italic" }}>All types of construction work in Michigan</h5>
                                <div class="d-flex flex-row mt-3 align-items-start">
                                    <img src={location } alt="location" />
                                    <div className="mt-auto"><h6>USA Michigan</h6></div>
                                </div>
                                <div className="mt-5">
                                    <ButtonFooter  href="#" buttonText="WRITE MY" />
                                </div>
                            
                            </div>
                        </div>
                        <div style={{borderTop:'1px solid #000', width: '100%', marginTop: '40px'}}></div>
                        <div className="footer-coperaite mt-2"><a href="https://www.web-mars.com/"><p>&copy; 2025 Mars desin studio</p></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;