import './style.css';
// import telegaSmall from '../../assets/image/telega-small.svg';
import casca from '../../assets/image/casca.svg';
import Facebook from '../../assets/image/Facebook.svg';
import Instagram from '../../assets/image/Instagram.svg';
import WatsApp from '../../assets/image/WhatsApp.svg';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';
import ButtonLittle from '../ButtonLittle/ButtonLittle';

function CardBlackContact(){
    return(
        <section className="card-black-contact pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card-black-contact-container d-flex justify-content-center align-items-center flex-column mt-5">
                        <div className="circle-card-top"></div>
                        <img className="social-img-contact-top" src={casca} alt="phone" />
                        <div className="card-black-contact-container-text mt-4">
                            <h6><span style={{ color: '#ffc107', fontStyle: "italic", textTransform:'uppercase'}}>Social</span></h6>
                        </div>
                        <div className="mt-4 d-flex justify-content-center align-items-center ">
                          {/* <ButtonWhiteMain link="#" buttonText="Contact us" /> */}
                         
                        </div>
                        <div class="social-img-contact mt-2 d-flex flex-row gap-5 mt-5">
                            <a href="#"><img  src={Facebook} alt="Facebook" /></a>
                            <a href="#"><img src={Instagram} alt="Instagram" /></a>
                            <a href="#"><img src={WatsApp} alt="WhatsApp" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CardBlackContact;