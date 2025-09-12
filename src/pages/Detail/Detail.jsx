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
import Advantages from "../../components/Advantages/Advantages";
import SectionComponent from "../../components/SectionComponent/SectionComponents";

function Detail(){
    return(
        <>
        <Helmet>
            <title>Remodeling Services in the USA | Kitchens, Bathrooms & More</title>
            <meta 
                name="description" 
                content="We provide all types of remodeling services: kitchen and bathroom renovations, basement finishing, flooring installation, drywall, painting, plumbing, roofing, siding, and more." 
            />
            <meta 
                name="keywords" 
                content="kitchen remodeling USA, bathroom renovation, basement finishing, drywall repair, drywall installation, plastering, flooring installation, hardwood flooring, tile installation, vinyl flooring, painting services, plumbing repair, electrical installation, roof repair, roof replacement, siding installation, carpentry, demolition services, home additions, office renovation" 
            />
            <meta property="og:title" content="Remodeling & Renovation Services in the USA" />
            <meta property="og:description" content="Our crew handles all types of services: kitchens, bathrooms, flooring, drywall, painting, plumbing, roofing, siding, and more." />
            <meta property="og:image" content="https://builderalexander.pythonanywhere.com/static/image/main-one.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Remodeling Services Across the USA" />
            <meta name="twitter:description" content="Services we provide: kitchen and bathroom remodeling, drywall, flooring, painting, plumbing, roofing, siding, carpentry, and more." />
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
       
        < NavBar />
        <DetailViews />
        <TextNew />
        <Advantages />
        <CardBlackMain />
        <CallButtonFixed />
        <ScrollToTopButton />
        <Footer />
        </>
    )
}
export default Detail;