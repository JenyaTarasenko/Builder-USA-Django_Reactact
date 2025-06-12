import './style.css';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';
import ButtonLittle from '../ButtonLittle/ButtonLittle';

function CardBlackMain(){
    return(
        <section className="card-black mt-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="card-black-container d-flex flex-column justify-content-center">
                        <div className="circle-card"></div>
                        <div className="card-black-container-text d-flex justify-content-center  mt-5 px-3 px-md-5">
                            <h6>We offer a comprehensive approach to solving your home improvement needs — from drywall installation to custom carpentry, covering a full range of professional services </h6>
                        </div>
                        <div className="card-black-container-column d-flex flex-row flex-wrap mt-5 gap-4 justify-content-center justify-content-lg-start px-5">
                            
                            <ButtonWhiteMain href="#" buttonText="Write me" />
                        
                            
                

                            {/* <a href=""><button class="button-call-now-white">Call Now</button></a> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CardBlackMain;