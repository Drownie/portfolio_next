import Banner from "@/components/banner";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll_to_top";
import Contact from "@/components/contact";
import NavbarNew from "@/components/navbar";

export default function Home () {
    return (
        <main className="bg-orange-100">
            <NavbarNew />
            <Banner />
            <div className="border-[.5px] border-amber-700 border-solid w-4/5 ml-[10%] my-10"></div>
            <About />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
          <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js" defer></script>
        </main>
    );
}