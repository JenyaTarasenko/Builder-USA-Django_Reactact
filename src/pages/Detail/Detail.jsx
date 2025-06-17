import DetailViews from "../../components/DetailViews/DetailViews";
// Navbar section
import NavBar from "../../components/NavBar/NavBar";
// section footer
import Footer from "../../components/Footer/Footer";
// компонент секция с текстом
import TextNew from "../../components/TextNew/TextNew";
// card black
import CardBlackMain from "../../components/CardBlackMain/CardBlackMain";
// gallery section
import Gallery from "../../components/Gallery/Gallery";
// scroll
import ScrollToTopButton from "../../components/ScrollToButton/ScrollToButton";
// tel-fixed
import CallButtonFixed  from "../../components/CallButtonFixed/CallButtonFixed";

function Detail(){
    return(
        <>
        < NavBar />
        <DetailViews />
        <TextNew />
        <CardBlackMain />
        <Gallery />
        <CallButtonFixed />
        <ScrollToTopButton />
        <Footer />
        </>
    )
}
export default Detail;