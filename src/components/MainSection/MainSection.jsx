import mainImage from '../../assets/image/main.png';
import manStyle from '../../assets/image/man-style.svg';
import './style.css';
import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';
import ButtonLittle from '../ButtonLittle/ButtonLittle';

function MainSection(){
    return(
        <section style={{marginTop: '70px',   backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '700px', minHeight: '300px',  borderRadius: '20px'}}>
            <div className="position-relative overflow-hidden text-white main-style-section">
        
                <div className="position-relative d-flex justify-content-between align-items-center flex-wrap">
                    <div className="left-column">
                        <h1><span style={{ color: '#ffc107', fontStyle: "italic"}}>All types </span>of construction work in <span style={{ color: '#ffc107', fontStyle: "italic" }}>Michigan</span></h1>
                        <h2>Professional Solutions for Home Improvement and Renovation</h2>
                            <ButtonWhiteMain  link="#" buttonText="Contact us" />
                       <img src={manStyle} style={{marginTop: '40px'}}/>
                       <p>Many people trust us and are satisfied with the results.</p>
                    </div>
                    <div className="right-column">
                        <ButtonLittle   link="#" buttonText="Write"/>
                    </div>
                </div>
            </div>
        </section>
    );
    
}
export default MainSection;