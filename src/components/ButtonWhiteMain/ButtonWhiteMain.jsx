import './style.css';
import strela from '../../assets/image/btn-strela.svg';

function ButtonWhiteMain({ link, buttonText }){
    return(
        <>
            <a href={link}>
                <button class="btn-with-circle"  style={{marginTop: '40px'}}>
                           {buttonText}
                            <span class="circle-inside">
                              <img src={strela} alt="иконка" />
                            </span>    
                </button>
            </a>
        </>
    );
}
export default ButtonWhiteMain;