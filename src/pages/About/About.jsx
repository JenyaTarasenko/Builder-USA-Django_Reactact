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
                {/* ✅ Title & Description */}
                <title>About Our Remodeling & Construction Team | Full-Service USA</title>
                <meta 
                    name="description" 
                    content="Learn about our licensed and insured remodeling crew providing all types of construction and renovation services across the USA: painting, drywall, flooring, plumbing, electrical, roofing, carpentry, and more." 
                />
                <meta 
                    name="keywords" 
                    content="about us remodeling USA, construction team, licensed contractor USA, full-service renovation, painting, drywall, flooring, plumbing, electrical, roofing, carpentry, demolition, siding, wallpaper, kitchen remodeling, bathroom renovation, basement finishing" 
                />

                {/* ✅ Open Graph (Facebook / LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Our Remodeling & Construction Team | Full-Service USA" />
                <meta property="og:description" content="Our licensed and insured team provides all types of remodeling and construction services nationwide — from painting and drywall to roofing, plumbing, and full home renovations." />
                <meta property="og:image" content="https://builderalexander.pythonanywhere.com/static/image/main-one.png" />
                <meta property="og:url" content="https://builderalexander.pythonanywhere.com/about-us/" />

                {/* ✅ Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Our Remodeling & Construction Team" />
                <meta name="twitter:description" content="Licensed remodeling crew in the USA handling painting, drywall, flooring, plumbing, electrical, roofing, carpentry, and complete renovations." />
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