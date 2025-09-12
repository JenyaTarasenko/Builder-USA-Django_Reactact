
import advantages from '../../assets/image/advatages.png';
import advantages1 from '../../assets/image/advantages1.png';
import advantages2 from '../../assets/image/advantages2.png';
import advantages3 from '../../assets/image/advantages3.png';


function Advantages(){
    return(
        <div className="d-flex mt-5">
            <div className="container">
                <div className="row justify-content-center d-flex flex-wrap ">
                    <div className="advantages-card d-flex flex-column" style={{width:"250px"}}>
                        <img src={advantages1} alt="advattages" style={{width:"50px"}}/>
                        <h6 style={{color: '#ffc107', fontStyle: "italic", fontSize:'20px'}}>Experience and Expertise</h6>
                        <p style={{color: '#404040',fontSize:'15px'}}>Our team consists of qualified specialists with years of hands-on experience in construction, renovation, and remodeling projects of any scale.</p>
                    </div>

                    <div className="advantages-card d-flex flex-column" style={{width:"250px"}}>
                        <img src={advantages} alt="advattages" style={{width:"50px"}}/>
                        <h6 style={{color: '#ffc107', fontStyle: "italic", fontSize:'20px'}}>Quality Materials and Technology</h6>
                        <p style={{color: '#404040',fontSize:'15px'}}>We use only certified, durable materials and follow proven construction technologies to guarantee long-lasting results.</p>
                    </div>

                    <div className="advantages-card d-flex flex-column" style={{width:"250px"}}>
                        <img src={advantages2} alt="advattages" style={{width:"50px"}}/>
                        <h6 style={{color: '#ffc107', fontStyle: "italic", fontSize:'20px'}}>Individual Approach</h6>
                        <p style={{color: '#404040',fontSize:'15px'}}>Every project is unique. We carefully listen to our clients’ needs and create tailored solutions that meet their goals and budget.</p>
                    </div>

                    <div className="advantages-card d-flex flex-column" style={{width:"250px"}}>
                        <img src={advantages3} alt="advattages" style={{width:"50px"}}/>
                        <h6 style={{color: '#ffc107', fontStyle: "italic", fontSize:'20px'}}>Reliability and Timeliness</h6>
                        <p style={{color: '#404040',fontSize:'15px'}}>We respect deadlines, maintain transparent communication, and ensure that every project is completed on time and to the highest standards.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advantages;