import './style.css';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


// номер и текст секции
function TextBoxMain(){
    const {ref, inView } = useInView({
        triggerOnce: true, // Анимация сработает один раз
        threshold: 0.5,     // Процент попадания блока в область видимости (50%)
    });
    return(
        <>
            <section id="textboxmain" className="text-box mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column text-box-column">
                            <h3>We’ve been in the construction industry for many years, serving the U.S. market with dedication and expertise.</h3>
                            <h4 className="mt-2" style={{fontStyle: 'italic', fontWeight: '300'}}>Our team has extensive experience, and we’re proud to have earned the trust of many satisfied clients..</h4>
                        </div>
                        <div className="col-md-6 d-flex align-items-end">
                        <div ref={ref} className="d-flex">
                            <div className="column-text-right d-flex flex-column align-items-center me-3">
                                <h5>
                                {inView ? <CountUp end={200} duration={2} prefix="+" /> : "+0"}
                                </h5>
                                <p>Clients</p>
                            </div>

                            <div className="border-start border-2" style={{ height: '50px' }}></div>

                            <div className="column-text-right d-flex flex-column align-items-center ms-3">
                                <h5>
                                {inView ? <CountUp end={100} duration={2} prefix="+" /> : "+0"}
                                </h5>
                                <p>Projects</p>
                            </div>
                        </div>
                            {/* <div className="d-flex flex-row gap-4">

                                <div className="column-text-right d-flex flex-column align-items-center">
                                    <h5>+200</h5>
                                    <p>Clients</p>
                                </div>
                                <div className="border-start border-2 ms-3" style={{height: '50px'}}></div>
                                <div className="column-text-right d-flex flex-column align-items-center">
                                    <h5>+100</h5>
                                    <p>Projects</p>
                                </div>
                            </div>
                             */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default TextBoxMain;