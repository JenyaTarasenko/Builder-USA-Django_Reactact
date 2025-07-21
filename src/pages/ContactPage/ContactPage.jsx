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
// SEO  npm install react-helmet
import { Helmet } from 'react-helmet';

function ContactPage(){
    return(
        <>
            <Helmet>
                <title>Contact Us – Michigan Builders</title>
                <meta name="description" content="Contact Michigan Builders for professional construction, renovation, and custom building solutions in Michigan." />
                <meta name="keywords" content="contact, Michigan Builders, phone, email, location, construction company" />
                <meta name="author" content="Michigan Builders" />
                <meta property="og:title" content="Contact Us – Michigan Builders" />
                <meta property="og:description" content="Get in touch with Michigan Builders for your next construction or renovation project." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com/contact" />
                <meta property="og:image" content="https://yourwebsite.com/static/contact-banner.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us – Michigan Builders" />
                <meta name="twitter:description" content="Reach out to our expert construction team in Michigan today." />
            </Helmet>
        
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