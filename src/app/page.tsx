import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll_to_top";
import Contact from "@/components/contact";

export default function Home () {
    return (
        <main className="bg-orange-100">
            <Navbar />
            <Banner />
            <div className="border-[.5px] border-amber-700 border-solid w-4/5 ml-[10%] my-10"></div>
            <About />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
        </main>
    );
}