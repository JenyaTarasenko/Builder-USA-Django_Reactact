import mainImage from '../../assets/image/main.png';
import manStyle from '../../assets/image/man-style.svg';
import './style.css';
// import ButtonWhiteMain from '../ButtonWhiteMain/ButtonWhiteMain';
// import ButtonLittleWrite from '../ButtonLittleWrite/ButtonLittleWrite';

function MainSection(){
    console.log(mainImage)
    return(
       
        <section style={{marginTop: '70px',   backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '600px', minHeight: '300px',  borderRadius: '70px'}}>
            <div className="position-relative overflow-hidden text-white main-style-section">
        
                <div className="position-relative d-flex justify-content-between align-items-center flex-wrap">
                    <div className="left-column">
                        <h1>All types of construction work in Michigan</h1>
                        <h2>Professional Solutions for Home Improvement and Renovation</h2>
                            {/* <ButtonWhiteMain  link="#"/> */}
                       <img src={manStyle} style={{marginTop: '40px'}}/>
                       <p>Many people trust us and are satisfied with the results.</p>
                    </div>
                    <div className="right-column">
                        {/* <ButtonLittleWrite   link="#"/> */}
                    </div>
                </div>
            </div>
        </section>
        
    );
    
}
export default MainSection;