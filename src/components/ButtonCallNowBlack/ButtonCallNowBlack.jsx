import './style.css';


function ButtonCallNowBlack({ link, buttonText }){
    return(
        <a href={link}>
            <button className="button-call-now">
                {buttonText}
            </button>
        </a>
    );
}
export default ButtonCallNowBlack;

