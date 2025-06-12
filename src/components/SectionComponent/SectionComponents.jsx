import './style.css';
import telegaSmall from '../../assets/image/telega-small.svg';

// номер и текст секции
function SectionComponent({ number, buttonText }){
    return(
        <>
            <section class="mt-5">
                <div class="wrapper">
                    <div class="circle-with-number">{number}</div>
                    <button class="button-next">{buttonText}</button>
                </div>
            </section>
        </>
    );
}
export default SectionComponent;