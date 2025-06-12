import './style.css';


function QuestionSection(){
    return(
        <section className="questions-section mt-5">
            <div className="scroll-container">
                <div className="questions-card">
                    <h6>How soon can you start a project?</h6>
                    <p className="mt-4">We strive to begin work as soon as possible, usually within a few business days after approval.</p>
                </div>
                <div className="questions-card">
                    <h6>How to contact you ?</h6>
                    <p className="mt-4">You can find our contacts on the website, click the write button and write to us</p>
                </div>
                <div className="questions-card">
                    <h6>What types of work do you do?</h6>
                    <p className="mt-4">We specialize in complete construction solutions, inside and out</p>
                </div>
            </div>
        </section>
    );
}
export default QuestionSection;