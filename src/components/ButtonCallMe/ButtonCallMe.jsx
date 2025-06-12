import './style.css';
import telegaSmall from '../../assets/image/telega-small.svg';

function ButtonCallMe({ link, buttonText }){
    return(
        <>
            <a href={link}>
                <button class="btn-with-circle-black"  style={{marginTop: '40px'}}>
                           {buttonText}
                            <span class="circle-inside-black">
                              <img src={telegaSmall} alt="иконка" />
                            </span>    
                </button>
            </a>
        </>
    );
}
export default ButtonCallMe;

