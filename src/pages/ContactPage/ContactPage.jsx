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
                <title>Contact Remodeling Contractors | Free Consultation in the USA</title>
                <meta 
                    name="description" 
                    content="Contact our remodeling team for a free consultation. We provide services across the USA: painting, drywall, flooring, plumbing, electrical, roofing, siding, carpentry, and complete renovations." 
                />
                <meta 
                    name="keywords" 
                    content="contact remodeling contractors USA, renovation consultation, painting services USA, drywall contractors, flooring installation, plumbing repair, electrical services, roof repair, roof installation, siding installation, carpentry, handyman services USA" 
                />
                <meta property="og:title" content="Contact Remodeling Contractors | Free Consultation in the USA" />
                <meta property="og:description" content="Get in touch with our nationwide remodeling team. From kitchens and bathrooms to flooring, drywall, roofing, and more — free consultation available." />
                <meta property="og:image" content="https://builderalexander.pythonanywhere.com/static/image/main-one.png" />
                <meta property="og:url" content="https://builderalexander.pythonanywhere.com/contact/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Remodeling Contractors in the USA" />
                <meta name="twitter:description" content="Reach out to our crew for remodeling and renovation services nationwide. Painting, drywall, flooring, roofing, plumbing, carpentry, and more." />
                <meta name="twitter:image" content="https://builderalexander.pythonanywhere.com/static/image/main-one.png" />

                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Full Remodeling & Construction Services",
                        "url": "https://builderalexander.pythonanywhere.com/",
                        "image": "https://builderalexander.pythonanywhere.com/static/image/main-one.png",
                        "description": "All types of remodeling services across the USA: painting, drywall, plumbing, electrical, roofing, carpentry, flooring, siding, windows, doors, and more."
                        }
                    `}
                </script>

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