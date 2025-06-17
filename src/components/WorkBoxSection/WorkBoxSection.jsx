import './style.css';
import TextBlock from '../../assets/image/text-block.png';
import TextBlock2 from '../../assets/image/block2.png';
import TextBlock3 from '../../assets/image/block3.png';
import ManStyle from '../../assets/image/man-style.svg';
import ManStyle2 from '../../assets/image/man-style3.svg';
import ButtonCallNowBlack from '../ButtonCallNowBlack/ButtonCallNowBlack';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function WorkBoxSection(){
    const location = useLocation();
    useEffect(()=>{
        if(location.hash){
            const element=document.querySelector(location.hash);
            if(element){
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },[location])
    return(
        <section  id="services" className="card-box-text mt-5">
            <div class="container">
                <div class="row justify-content-center">
            
                    <div className="col-12 col-lg-6  d-flex justify-content-center">
                        <img className="image-text-card" src={TextBlock} />
                    </div>
                    <div id="interior" class="col-lg-6 d-flex flex-column image-text-card-items">
                        <h6><span style={{ color: '#ffc107',  fontStyle: "italic" , fontSize:"60px" }}>INTERIOR</span> WORK</h6>
                        <h5>Complete exterior painting for homes, siding, and trim Woodwork and carpentry services, including repair and custom installations.Facade restoration and painting, giving your property a fresh, modern look.Roof repair and maintenance, protecting your home from the elements.Outdoor lighting replacement and upgrades, improving safety and curb appeal</h5>
                        <div className="d-flex flex-row-reverse justify-content-end mt-2">
                            <img src={ManStyle}  alt="job-image" />
                            {/* <div class="secondary-text-card-items"><p>Many people trust our team</p></div>  */}
                        </div>
                    </div>
            
                </div>
                <div class="row justify-content-center mt-5">
            
                    <div id="exterior" class="col-lg-6 d-flex flex-column image-text-card-items">
                        <h6><span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px" }}>EXTERIOR</span> WORK</h6>
                        <h5>We provide comprehensive interior services including drywall replacement, all types of painting (walls and ceilings), light fixture installation, full plumbing solutions, wall-mounted TV installation, and a wide range of electrical work — all delivered with professional care and precision.</h5>
                        <div className="d-flex mt-4 mb-5">
                            <ButtonCallNowBlack href="/projects-all" buttonText="All projects" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6  d-flex justify-content-center">
                        <img  className="image-text-card" src={TextBlock2}  alt="job-image"  />
                    </div>
            
                </div>
                <div class="row justify-content-center mt-5">
    
                    <div className="col-12 col-lg-6  d-flex justify-content-center">
                        <img  className="image-text-card" src={TextBlock3}  alt="job-image"  />
                    </div>
                    <div id="painting" class="col-lg-6 d-flex flex-column image-text-card-items">
                        <h6>ALL TYPES OF <span style={{ color: '#ffc107', fontStyle: "italic" , fontSize:"60px" }}>PAINTING</span></h6>
                        <h5>Complete exterior painting for homes, siding, and trim Woodwork and carpentry services, including repair and custom installations.Facade restoration and painting, giving your property a fresh, modern look.Roof repair and maintenance, protecting your home from the elements.Outdoor lighting replacement and upgrades, improving safety and curb appeal</h5>
                        <div className="d-flex flex-row justify-content-end mt-2">
                            <img src={ManStyle2} alt="job-image" />
                                {/* <div className="secondary-text-card-items"><p>Many people trust our team</p></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkBoxSection;