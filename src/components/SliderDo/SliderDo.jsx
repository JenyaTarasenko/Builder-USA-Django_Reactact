import './style.css';
import review5 from '../../assets/image/slider-do.jpg';
import review1 from '../../assets/image/slider-do1.jpg';
import review2 from '../../assets/image/slider-do2.jpg';
import review3 from '../../assets/image/slider-do3.jpg';
import review4 from '../../assets/image/slider-do4.jpg';
import review6 from '../../assets/image/slider-do5.jpg';
import review7 from '../../assets/image/slider-do6.jpg';
import { useInView } from "react-intersection-observer";





function SliderDo(){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const fadeInLeftStyle = (delay = 0) => ({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)", // сдвиг слева
        // transition: `all 1s ease-out ${delay}s`
        transition: `opacity 1.5s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s, transform 1.5s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s`
    });
    return(
        
        <>
           <div className='project-detail-text mt-5'>
                <div className="container">
                    <div className="row">
                        <h3 ref={ref} style={fadeInLeftStyle(0.2)}><span style={{ color: '#E77B2D', fontStyle: "italic", fontSize:"70px", fontWeight:"bold", textTransform:"uppercase"}}>Before</span></h3>
                        <p className="fade-in-up">Challenges our team faces</p>
                    </div>
                </div>
            </div>    
            <div id="slider-review" className="slider-container mt-5">
                <div class="slider-track">
                    <div class="card-img">
                        <img src={review5} alt="img1" />
                    </div>
                    <div class="card-img">
                        <img src={review1} alt="img2" />
                    </div>
                    <div class="card-img">
                        <img src={review2} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review3} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review4} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review5} alt="img1" />
                    </div>
                    <div class="card-img">
                        <img src={review1} alt="img2" />
                    </div>
                    <div class="card-img">
                        <img src={review2} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review3} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review4} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review6} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review7} alt="img3" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default SliderDo;