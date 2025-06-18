import './style.css';

function ProjectsAllText(){
    return(
        <section className="project-detail-text mt-5">
            <div className="container">
                <div className="row">
                    <div className="text-detail-button">
                        <h1 className='text-detail-button-items'><span style={{fontStyle:'italic', color:"#ffc107"}}>Experienced Builders </span> Delivering Quality Work On Time — From Minor Repairs to Major <span style={{fontStyle:'italic', color:"#ffc107"}}>Renovations</span></h1>
                    </div>
                    <div className="text-detail-button-description mt-2">
                        <h2>We provide complete exterior solutions — from full home painting, woodwork, and custom carpentry to facade restoration, roof repairs, and upgraded outdoor lighting that boosts both protection and curb appeal.</h2>
                    </div>
                    <div className="text-detail-button-description mt-3">
                        <h3 style={{color: '#E77B2D', fontStyle: "italic"}}>We offer a full range of interior services including drywall replacement, professional painting for walls and ceilings, light fixture installation, electrical upgrades, and complete plumbing solutions — all delivered with expert precision.</h3>
                    </div>
                    <div className="text-detail-button-description mt-3">
                        <h2>Our construction team brings years of proven experience and craftsmanship to every project. With a long-standing presence in the American market, we are dedicated to delivering work that exceeds expectations. Quality isn’t just a standard — it’s our promise</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProjectsAllText;
