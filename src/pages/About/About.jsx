// навбар
import NavBar from "../../components/NavBar/NavBar";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
// section footer
import Footer from "../../components/Footer/Footer";
// section abouttext
import AboutText from "../../components/AboutText/AboutText";
// компонент Секция с сменными параметрами секции
import SectionComponent from "../../components/SectionComponent/SectionComponents";
// gallery section
import Gallery from "../../components/Gallery/Gallery";
//  comment
import SliderReview from "../../components/SliderReview/SliderReview";
// section ContactUs
import ContactUs from "../../components/ContactUs/ContactUs";
// компонент секция с текстом
import TextNew from "../../components/TextNew/TextNew";
// image in section   <ContactUs image={imageJob} />
import imageJob from '../../assets/image/contactUs4.jpg';
// scroll
import ScrollToTopButton from "../../components/ScrollToButton/ScrollToButton";
// tel-fixed
import CallButtonFixed  from "../../components/CallButtonFixed/CallButtonFixed";

function About(){
    return(
        <>
            <NavBar />
            <AboutCompany />
            <AboutText />
            <SectionComponent number={1} buttonText="Project Gallery" />
            <Gallery />
            <TextNew />
            <SectionComponent number={2} buttonText="REVIEW" />
            <SliderReview />
            <ContactUs image={imageJob} />
            <ScrollToTopButton />
            <CallButtonFixed />

            <Footer />
        </>
    );
}
export default About;