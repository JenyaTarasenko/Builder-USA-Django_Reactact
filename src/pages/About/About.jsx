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
// SEO  npm install react-helmet
import { Helmet } from 'react-helmet';

function About(){
    return(
        <>
            <Helmet>
                <title>About Our Construction Company | Michigan Experts</title>
                <meta name="description" content="Learn more about our experienced construction and renovation team in Michigan. Quality work and reliable service since [год]." />
                <meta property="og:title" content="About Our Construction Company" />
                <meta property="og:description" content="Discover who we are and how we help Michigan homeowners improve their living spaces." />
                <meta property="og:image" content="/preview-about.png" />
                <meta property="og:url" content="https://yourdomain.com/about" />
                <meta name="twitter:title" content="About Our Construction Company | Michigan Experts" />
                <meta name="twitter:description" content="Michigan-based construction and renovation team delivering quality service you can trust." />
                <meta name="twitter:image" content="/preview-about.png" />
            </Helmet>
            
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