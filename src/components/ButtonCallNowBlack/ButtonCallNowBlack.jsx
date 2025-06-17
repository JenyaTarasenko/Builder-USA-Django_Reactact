import './style.css';


function ButtonCallNowBlack({ href, buttonText }){
    return(
        <a href={href}>
            <button className="button-call-now">
                {buttonText}
            </button>
        </a>
    );
}
export default ButtonCallNowBlack;

