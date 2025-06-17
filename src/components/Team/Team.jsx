import './style.css';
import team from '../../assets/image/team.jpg';


function Team(){
    return(
        <section className="mt-5 image-team-section">
        <div className="container">
            <div className="row">
                <div className="text-center">
                    <h5 style={{textTransform:"uppercase"}}>Meet the <span style={{ color: '#ffc107', fontStyle: "italic", fontSize:'50px'}}>Team</span> That Builds<br/> with Purpose.</h5>
                    <h4 className="mt-3 w-75 w-md-50 mx-auto text-wrap text-start text-md-center" style={{color:'#6D6D6D', fontSize:'20px', fontWeight:'400'}}>Based in Michigan, our construction team understands the local building codes, climate, and client needs. With a strong commitment to safety, quality, and communication, we’ve earned the trust of homeowners and businesses throughout the area</h4>
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