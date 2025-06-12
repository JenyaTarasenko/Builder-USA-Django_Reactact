import './style.css';


// номер и текст секции
function TextNew(){
    return(
        <>
            <section className="text-section-container">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 text-block-left">
                            <h5>Quality work tailored to your needs.</h5>
                        </div>
                        <div className="col-md-8 text-block-right">
                            <h6>We are a dedicated team of experienced builders who take pride in our work. From small repairs to urgent renovations, we deliver high-quality results quickly and efficiently. Our expertise covers all areas of construction, and we always meet deadlines.</h6>
                        </div>
                        <div className="text-block-right-center mt-2">
                            <h6>Our team delivers high-quality work while carefully considering every client’s needs and preferences.</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default TextNew;