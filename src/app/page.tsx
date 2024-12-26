import Banner from "@/components/banner";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll_to_top";
import Contact from "@/components/contact";
import Image from "next/image";
import Navbar from "@/components/navbar_old";

export default function Home () {
    return (
        <main className="bg-black w-screen h-full min-h-screen">
            <Navbar/>

            <Banner />
            {/* <div className="border-[.5px] border-amber-700 border-solid w-4/5 ml-[10%] my-10"></div> */}
            <About />

            <Projects />

            <Contact />

            <Footer />
            <ScrollToTop />
        </main>
    );
}