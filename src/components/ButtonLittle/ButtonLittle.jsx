import './style.css';
import telegaSmall from '../../assets/image/telega-small.svg';

function ButtonLittle({ link }){
    return(
        <>
        <a href={link}>
            <button class="btn-with-circle-smale">
                            Write 
                <span class="circle-inside-smale">
                    <img src={telegaSmall } alt="иконка" />
                </span>
            </button>
        </a>
        </>
    );
}
export default ButtonLittle