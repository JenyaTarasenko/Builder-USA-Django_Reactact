// компонент рендерит api всех проектов список
// import ListViews from "../../components/ListViews/ListViews";
// навбар
import NavBar from "../../components/NavBar/NavBar";
// секция главный экран
import MainSection from "../../components/MainSection/MainSection";
// компонент Секция с сменными параметрами секции
import SectionComponent from "../../components/SectionComponent/SectionComponents";
// компонент секция с текстом
import TextNew from "../../components/TextNew/TextNew";
// компонент c пережнем работ
import BoxProject from "../../components/BoxProject/BoxProject";
// слайдер отзывов клиентов
import SliderReview from "../../components/SliderReview/SliderReview";
// компонент секция
import TextBoxMain from "../../components/TextBoxMain/TextBoxMain";
// компонент текст
import TextCenterSection from "../../components/TextCenterSection/TextCenterSection";
// компоне секция с перечнем работ
import WorkBoxSection from "../../components/WorkBoxSection/WorkBoxSection";
// card black
import CardBlackMain from "../../components/CardBlackMain/CardBlackMain";
// section Team
import Team from "../../components/Team/Team";
// section ContactUs
import ContactUs from "../../components/ContactUs/ContactUs";
// section Job
import AboutJobSection from "../../components/AboutJobSection/AboutJobSection";
// section questions
import QuestionSection from "../../components/QuestionSection/QuestionSection";
// section footer
import Footer from "../../components/Footer/Footer";
// image in section   <ContactUs image={imageJob} />
import imageJob from '../../assets/image/image-job.png';
// scroll
import ScrollToTopButton from "../../components/ScrollToButton/ScrollToButton";
// tel-fixed
import CallButtonFixed  from "../../components/CallButtonFixed/CallButtonFixed";

import SliderDo from "../../components/SliderDo/SliderDo";
import SliderAfter from "../../components/SliderAfter/SliderAfter";
import TextDoAfter from "../../components/TextDoAfter/TextDoAfter";
import Advantages from "../../components/Advantages/Advantages";

// SEO  npm install react-helmet
import { Helmet } from 'react-helmet';


function Index(){
    return(
        <>
        <Helmet>
            <title>All Types of Remodeling & Construction Services in the USA</title>
            <meta 
                name="description" 
                content="Our crew delivers all types of remodeling and construction services: kitchens, bathrooms, basements, flooring, drywall, painting, and full renovations. Licensed & insured contractors in the USA." 
            />
            <meta 
                name="keywords" 
                content="remodeling USA, construction services, full renovation, kitchen remodeling, bathroom renovation, drywall, flooring installation, basement finishing" 
            />
            <meta property="og:title" content="Michigan Construction & Remodeling | Trusted Contractors" />
            <meta 
                property="og:description" 
                content="Professional construction and remodeling services in Michigan. Kitchens, bathrooms, basements — we build and renovate with care." 
            />
             {/* ✅ Open Graph for Facebook / LinkedIn */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="All Types of Remodeling & Construction Services in the USA" />
            <meta property="og:description" content="From kitchens to basements — our team provides every type of remodeling service across the United States." />
            <meta property="og:image" content="https://builderalexander.pythonanywhere.com/static/image/main-one.png" />
            <meta property="og:url" content="https://builderalexander.pythonanywhere.com/" />

              {/* ✅ Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="All Types of Remodeling & Construction Services in the USA" />
            <meta name="twitter:description" content="Kitchens, bathrooms, basements, flooring, drywall, painting, and more. Our licensed crew works on all types of remodeling projects in the USA." />
            <meta name="twitter:image" content="https://builderalexander.pythonanywhere.com/static/image/main-one.png" />

              {/* JSON-LD */}
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
        <MainSection />
        <SectionComponent number={1} buttonText="MANY PROJECTS" />
        <TextBoxMain />
        <SectionComponent number={2} buttonText="TYPES OF WORK" />
        <BoxProject />
        <TextNew />
        <SectionComponent number={3} buttonText="Before & After" />
        <TextDoAfter />
        <SliderDo />
        <SliderAfter />
        <SectionComponent number={4} buttonText="Advantages" />
        <Advantages />
        <TextCenterSection />
        <SectionComponent number={5} buttonText="ALL TYPES OF WORK" />
        <WorkBoxSection />
        <CardBlackMain />
        <SectionComponent number={6} buttonText="TEAM" />
        <Team  />
        <SectionComponent number={7} buttonText="ABUOT JOB" />
        <AboutJobSection />
        <SectionComponent number={8} buttonText="Contact us" />
        <ContactUs image={imageJob} />
        <SectionComponent number={9} buttonText="Questions" />
        <QuestionSection />
        <CallButtonFixed />
        <ScrollToTopButton  />
        <SectionComponent number={10} buttonText="REVIEWS" />
        <SliderReview  />
        <ScrollToTopButton  />
        <Footer />
        {/* <ListViews/> */}
        </>
    )
}
export default Index;