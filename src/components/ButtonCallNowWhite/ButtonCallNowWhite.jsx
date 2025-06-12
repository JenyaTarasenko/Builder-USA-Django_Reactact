import './style.css';

function ButtonCallNowWhite({link,  buttonText}){
    return(
        <a href={link}>
            <button class="button-call-now-white">
                {buttonText }
            </button>
        </a>
    );
}
export default ButtonCallNowWhite;