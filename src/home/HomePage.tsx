import Footer from "../components/Footer"
import Header from "../components/Header"
import GallerySection from "./components/GallerySection"
import HeroSection from "./components/HeroSection"
import MemberSection from "./components/MemberSection"
import TrackSection from "./components/TrackSection"

export default function HomePage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <TrackSection />
            <MemberSection />
            <GallerySection />
            <Footer />
        </div>
    )
}
