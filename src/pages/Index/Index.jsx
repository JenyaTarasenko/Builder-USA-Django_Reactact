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

// SEO  npm install react-helmet
import { Helmet } from 'react-helmet';


function Index(){
    return(
        <>
        <Helmet>
            <title>Michigan's Trusted Construction & Remodeling Team</title>
            <meta name="description" content="From kitchens to basements — we build, repair, and renovate with care. Licensed & insured contractors in Michigan." />
            <meta name="keywords" content="разработка сайтов, студия, дизайн, фронтенд, SEO" />
            <meta property="og:title" content="Michigan's Trusted Construction & Remodeling Team" />
            <meta property="og:description" content="Создание сайтов и уникального стиля для вашего бизнеса." />
            <link rel="apple-touch-icon" href="/favicon/favicon196.png" />
            {/* <meta property="og:image" content="/preview-home.png" /> */}
            <meta property="og:url" content="https://example.com/" />
        </Helmet>
        <NavBar />
        <MainSection />
        <SectionComponent number={1} buttonText="MANY PROJECTS" />
        <TextBoxMain />
        <SectionComponent number={2} buttonText="TYPES OF WORK" />
        <BoxProject />
        <TextNew />
        <SectionComponent number={3} buttonText="REVIEWS" />
        <SliderReview  />
        <TextCenterSection />
        <SectionComponent number={4} buttonText="ALL TYPES OF WORK" />
        <WorkBoxSection />
        <CardBlackMain />
        <SectionComponent number={5} buttonText="TEAM" />
        <Team  />
        <SectionComponent number={6} buttonText="ABUOT JOB" />
        <AboutJobSection />
        <SectionComponent number={7} buttonText="Contact us" />
        <ContactUs image={imageJob} />
        <SectionComponent number={8} buttonText="Questions" />
        <QuestionSection />
        <CallButtonFixed />
        <ScrollToTopButton  />
        <Footer />
        {/* <ListViews/> */}
        </>
    )
}
export default Index;