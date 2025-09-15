import './style.css';
import team from '../../assets/image/team.jpg';
import { useInView } from "react-intersection-observer";


function Team(){
    const { ref, inView } = useInView({
        triggerOnce: true,   // анимация сработает только один раз
        threshold: 0.2,      // 20% блока видимо — запускаем анимацию
    });

    const fadeInStyle = (delay = 0)=>({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `all 1s ease-out ${delay}s` // добавляем задержку
    });

    return(
        <section className="mt-5 image-team-section">
        <div className="container">
            <div className="row">
                <div className="text-center" ref={ref}>
                    <h5 style={{ ...fadeInStyle(0.3),textTransform:"uppercase"}}>Meet the <span style={{ color: '#ffc107', fontStyle: "italic", fontSize:'50px'}}>Team</span> That Builds<br/> with Purpose.</h5>
                    <h4 className="mt-3 w-75 w-md-50 mx-auto text-wrap text-start text-md-center" style={{ ...fadeInStyle(0.7), color:'#6D6D6D', fontSize:'20px', fontWeight:'400'}}>Based in Michigan, our construction team understands the local building codes, climate, and client needs. With a strong commitment to safety, quality, and communication, we’ve earned the trust of homeowners and businesses throughout the area</h4>
                </div>
                {/* <div className="d-flex align-items-center justify-content-center mt-4">
                   <ButtonCallMe link="#" buttonText="WRITE MY" />
                </div> */}
                {/* <div className="d-flex align-items-center justify-content-center flex-row flex-wrap mt-5 gap-5">
                    <img src={team} className="image-team"/>
                    <img src={team} className="image-team"/>
                    <img src={team} className="image-team"/>
                </div> */}
            </div>
        </div>
    </section>
    );

}
export default Team;