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

function ContactPage(){
    return(
        <>
            <NavBar />
            <ContactSection />
            <Team />
            <CardBlackContact />
            <SliderReview  />
            <CallButtonFixed />
            <ScrollToTopButton />
            <Footer />

        </>
    );
}
export default ContactPage;