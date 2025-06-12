import './style.css';
import telegaSmall from '../../assets/image/telega-small.svg';


function ButtonFooter({link,  buttonText}){
    return(
        <>
        <a href={link}>
            <button class="btn-with-circle-footer"  style={{marginTop: '40px'}}>
                       {buttonText}
                        <span class="circle-inside-footer">
                          <img src={telegaSmall} alt="иконка" />
                        </span>    
            </button>
        </a>
    </>
    );
}
export default ButtonFooter;