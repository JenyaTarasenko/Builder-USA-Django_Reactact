import './style.css';

function AboutText(){
    return(
        <section className="project-detail-text mt-5">
            <div className="container">
                <div className="row">
                    <div className="text-detail-button">
                        <h1 className='text-detail-button-items'>We’re a <span style={{ color: '#ffc107', fontStyle: "italic"}}>Team</span> of Trusted Builders Providing Comprehensive Home Improvement and <span style={{ color: '#ffc107', fontStyle: "italic"}}>Renovation Services</span></h1>
                    </div>
                    <div className="text-detail-button-description mt-2">
                        <h2>From minor repairs to full-scale remodeling, our experienced construction team is committed to quality craftsmanship, reliability, and customer satisfaction. Whether you need interior updates, exterior improvements, or complete home renovations</h2>
                    </div>
                    <div className="text-detail-button-description mt-3">
                        <h3 style={{color: '#E77B2D', fontStyle: "italic"}}>We offer a full range of interior services including drywall replacement, professional painting for walls and ceilings, light fixture installation, electrical upgrades, and complete plumbing solutions — all delivered with expert precision.</h3>
                    </div>
                    <div className="text-detail-button-description mt-5">
                        <h4 className='text-detail-main'>We specialize in residential construction and renovation projects of all complexities — from quick repairs to full-scale transformations. Our expert team delivers both interior and exterior solutions with precision, safety, and style</h4>
                    </div>
                    <div className="text-detail-button-description mt-3">
                        <h4 style={{fontWeight:'900', fontSize:'20px',textTransform:'uppercase'}}><span style={{ color: '#ffc107', fontStyle: "italic"}}>Exterior</span> Services:</h4>
                    </div>
                    <div className="text-detail-button-description ps-5">
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Complete exterior painting for homes, siding, and trim</h4>
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Expert woodwork and carpentry, including repairs and custom builds</h4>
                        <h4 style={{fontWeight:'400', fontSize:'18px'}}>Facade restoration to revitalize and modernize your home’s look</h4>
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Roof repair and maintenance to ensure long-term protection</h4>
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Outdoor lighting installation and upgrades to enhance safety and curb appeal</h4>
                    </div>
                    <div className="text-detail-button-description mt-3">
                        <h4 style={{fontWeight:'900', fontSize:'20px',textTransform:'uppercase'}}><span style={{ color: '#ffc107', fontStyle: "italic"}}>Interior</span> Services:</h4>
                    </div>
                    <div className="text-detail-button-description ps-5">
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Drywall installation, repair, and finishing</h4>
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Professional interior painting for walls and ceilings</h4>
                        <h4 style={{fontWeight:'400', fontSize:'18px'}}>Light fixture installation and electrical upgrades</h4>
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Full plumbing services, from small fixes to complete replacements</h4>
                        <h4 style={{fontWeight:'400',fontSize:'18px'}}>Wall-mounted TV installation and custom solutions tailored to your space</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutText;
