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
// SEO  npm install react-helmet
import { Helmet } from 'react-helmet';

function Detail(){
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
            <meta name="twitter:title" content="Contact Us – Michigan Builders" />
            <meta name="twitter:description" content="Reach out to our expert construction team in Michigan today." />
        </Helmet>
       
        < NavBar />
        <DetailViews />
        <TextNew />
        <Gallery />
        <CardBlackMain />
        <CallButtonFixed />
        <ScrollToTopButton />
        <Footer />
        </>
    )
}
export default Detail;