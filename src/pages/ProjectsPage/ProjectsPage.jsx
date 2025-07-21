// навбар
import NavBar from "../../components/NavBar/NavBar";
// section footer
import Footer from "../../components/Footer/Footer";
// first section 
import ProjectsMain from "../../components/ProjectsMain/ProjectsMain";
// компонент Секция с сменными параметрами секции
import SectionComponent from "../../components/SectionComponent/SectionComponents";
// projects all
import ListViews from '../../components/ListViews/ListViews';
// компонент текст
import TextCenterSection from "../../components/TextCenterSection/TextCenterSection";
// gallery section
import Gallery from "../../components/Gallery/Gallery";
import ProjectsAllText from "../../components/ProjectsAllText/ProjectsAllText";
import TextNew from "../../components/TextNew/TextNew";
// scroll
import ScrollToTopButton from "../../components/ScrollToButton/ScrollToButton";
// tel-fixed
import CallButtonFixed  from "../../components/CallButtonFixed/CallButtonFixed";
// section about-projects
import SectionJobReally from "../../components/SectionJobReally/SectionJobReally";
// SEO  npm install react-helmet
import { Helmet } from 'react-helmet';

function ProjectsPage(){
    return(
        <>
            <Helmet>
                <title>Our Projects | Construction and Renovation Portfolio</title>
                <meta name="description" content="Explore our completed construction and home renovation projects across Michigan. View photos and case studies." />
                <meta property="og:title" content="Our Projects" />
                <meta property="og:description" content="See real examples of how we’ve transformed homes and buildings in Michigan." />
                <meta property="og:url" content="https://yourdomain.com/projects" />
                <meta name="twitter:title" content="Our Projects | Construction and Renovation Portfolio" />
                <meta name="twitter:description" content="Take a look at our past work and successful construction projects in Michigan." />
           
            </Helmet>
            <NavBar />
            <ProjectsMain  />
            <ProjectsAllText />
            <SectionComponent number={1} buttonText="ALL PROJECTS" />
            <ListViews />
            <TextNew />
            <SectionJobReally />
            <SectionComponent number={2} buttonText="Project Gallery" />
            <Gallery />
            <ScrollToTopButton />
            <TextCenterSection />
            <CallButtonFixed />
            <Footer />
        </>
    );
}
export default ProjectsPage;