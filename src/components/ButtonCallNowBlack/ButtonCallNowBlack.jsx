import './style.css';
import { Link } from 'react-router-dom';


function ButtonCallNowBlack({ href, buttonText }){
    return(
        <Link to={href}>
            <button className="button-call-now">
                {buttonText}
            </button>
        </Link>
    );
}
export default ButtonCallNowBlack;

