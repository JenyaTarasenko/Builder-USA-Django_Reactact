import './style.css';
import slider1 from '../../assets/image/slaider/slaider1.jpeg';
import slider2 from '../../assets/image/slaider/slaider2.jpeg';
import slider3 from '../../assets/image/slaider/slaider3.jpeg';
import slider4 from '../../assets/image/slaider/slaider4.jpeg';
import slider5 from '../../assets/image/slaider/slaider5.jpeg';
import slider6 from '../../assets/image/slaider/slaider6.jpeg';
import slider7 from '../../assets/image/slaider/slaider7.jpeg';
import slider8 from '../../assets/image/slaider/slaider8.jpeg';
import slider9 from '../../assets/image/slaider/slaider9.jpeg';
import slider10 from '../../assets/image/slaider/slaider10.jpeg';
import slider11 from '../../assets/image/slaider/slaider11.jpeg';
import slider12 from '../../assets/image/slaider/slaider12.jpeg';
import slider13 from '../../assets/image/slaider/slaider13.jpeg';
import slider14 from '../../assets/image/slaider/slaider14.jpeg';
import slider15 from '../../assets/image/slaider/slaider15.jpeg';
import slider16 from '../../assets/image/slaider/slaider16.jpeg';


function Gallery(){
    return(
        <section className="slaider-section mt-5">
            <div id="carouselExampleInterval" className="carousel slide slider-container" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={slider1} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider2} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider3} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider4} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider5} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider6} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider7} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider8} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider9} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider10} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider11} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider12} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider13} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider14} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider15} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider16} class="d-block w-100 slider-items" alt="Картинка Руки милости слайдер" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section> 
    );
}
export default Gallery;