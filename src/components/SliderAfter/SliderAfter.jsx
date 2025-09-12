import './style.css';
import review5 from '../../assets/image/after1.jpg';
import review1 from '../../assets/image/after2.jpg';
import review2 from '../../assets/image/after3.jpg';
import review3 from '../../assets/image/after4.jpg';
import review4 from '../../assets/image/after5.jpg';
import review6 from '../../assets/image/after6.jpg';
import review7 from '../../assets/image/after7.jpg';
import review8 from '../../assets/image/after8.jpg';




function SliderAfter(){
    return(
        <>
           <div className='project-detail-text mt-5'>
                <div className="container">
                    <div className="row">
                        <h3 className="fade-in-up"><span style={{ color: '#E77B2D', fontStyle: "italic", fontSize:"70px", fontWeight:"bold", textTransform:"uppercase"}}>After</span></h3>
                        <p className="fade-in-up">How we deal with problems</p>
                        {/* <h4 className='' style={{fontSize:"15px",color: '#868181', fontStyle: "italic",maxWidth:"500px"}}>This is what our team deals with on a daily basis. Every project is unique and requires its own individual approach. We carefully assess each task, select the right materials and techniques, and deliver solutions tailored to the specific needs of our clients.</h4> */}
                    </div>
                </div>
            </div>    
            <div id="slider-review" className="slider-container mt-5">
                <div class="slider-track reverse">
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
                    <div class="card-img">
                        <img src={review8} alt="img3" />
                    </div>
                    <div class="card-img">
                        <img src={review5} alt="img3" />
                    </div>
                
                </div>
            </div>
        </>
    );
}
export default SliderAfter;