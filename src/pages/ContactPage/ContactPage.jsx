import './style.css';
// навбар
import NavBar from "../../components/NavBar/NavBar";
// section footer
import Footer from "../../components/Footer/Footer";
// ContactSection 
import ContactSection from '../../components/ContactSection/ContactSection';
// section Team
import Team from "../../components/Team/Team";
// section CardSocial
import CardBlackContact from '../../components/CardBlackContact/CardBlackContact';
// слайдер отзывов клиентов
import SliderReview from "../../components/SliderReview/SliderReview";
// scroll
import ScrollToTopButton from "../../components/ScrollToButton/ScrollToButton";
// tel-fixed
import CallButtonFixed  from "../../components/CallButtonFixed/CallButtonFixed";
// компонент Секция с сменными параметрами секции
import SectionComponent from "../../components/SectionComponent/SectionComponents";
// section questions
import QuestionSection from "../../components/QuestionSection/QuestionSection";

function ContactPage(){
    return(
        <>
            <NavBar />
            <ContactSection />
            <SectionComponent number={1} buttonText="TEAM" />
            <Team />
            <SectionComponent number={2} buttonText="SOCIAL" />
            <CardBlackContact />
            <SectionComponent number={3} buttonText="REVIEW" />
            <SliderReview  />
            <CallButtonFixed />
            <ScrollToTopButton />
            <SectionComponent number={4} buttonText="Question" />
            <QuestionSection />
            <Footer />

        </>
    );
}
export default ContactPage;