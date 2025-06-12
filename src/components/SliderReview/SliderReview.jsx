import './style.css';
import review5 from '../../assets/image/card-1.svg';
import review1 from '../../assets/image/card-2.svg';
import review2 from '../../assets/image/card-4.svg';
import review3 from '../../assets/image/card-5.svg';
import review4 from '../../assets/image/card-7.svg';




function SliderReview(){
    return(
        <>
            <div className="slider-container mt-5">
                <div class="slider-track">
                    <div class="card">
                        <img src={review5} alt="img1" />
                    </div>
                    <div class="card">
                        <img src={review1} alt="img2" />
                    </div>
                    <div class="card">
                        <img src={review2} alt="img3" />
                    </div>
                    <div class="card">
                        <img src={review3} alt="img3" />
                    </div>
                    <div class="card">
                        <img src={review4} alt="img3" />
                    </div>
                    <div class="card">
                        <img src={review5} alt="img1" />
                    </div>
                    <div class="card">
                        <img src={review1} alt="img2" />
                    </div>
                    <div class="card">
                        <img src={review2} alt="img3" />
                    </div>
                    <div class="card">
                        <img src={review3} alt="img3" />
                    </div>
                    <div class="card">
                        <img src={review4} alt="img3" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default SliderReview;