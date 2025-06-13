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

function ProjectsPage(){
    return(
        <>
            <NavBar />
            <ProjectsMain  />
            <ProjectsAllText />
            <SectionComponent number={1} buttonText="ALL PROJECTS" />
            <ListViews />
            <TextNew />
            <SectionComponent number={2} buttonText="Project Gallery" />
            <Gallery />
            
            <TextCenterSection />
            <Footer />
        </>
    );
}
export default ProjectsPage;