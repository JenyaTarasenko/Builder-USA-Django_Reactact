
import { useInView } from "react-intersection-observer";




function TextDoAfter(){

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
        <section className="mt-5" >
            <div className="container">
                <div className="row">
                    <div className="text-center" ref={ref}>
                        <h5 style={{ ...fadeInStyle(0.3), textTransform:"uppercase", fontSize:'30px'}}>Our <span style={{ color: '#ffc107', fontStyle: "italic", fontSize:'35px'}}>team </span>works with a wide variety of <span style={{ color: '#ffc107', fontStyle: "italic", fontSize:'35px'}}>tasks</span> dapting to every <span style={{ color: '#ffc107', fontStyle: "italic", fontSize:'35px'}}>challenge</span></h5>
                        <h4 className="mt-3 w-75 w-md-50 mx-auto text-wrap text-start text-md-center" style={{ ...fadeInStyle(0.7),color:'#6D6D6D', fontSize:'20px', fontWeight:'400'}}>This is what our team deals with on a daily basis. Every project is unique and requires its own individual approach. We carefully assess each task, select the right materials and techniques, and deliver solutions tailored to the specific needs of our clients.</h4>
                    </div>
                
                </div>
            </div>
        </section>
    );

}
export default TextDoAfter;