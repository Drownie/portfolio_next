import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home () {
    return (
        <main className="bg-orange-100">
            <Navbar />
            <Banner />
            <div className="border-[.5px] border-amber-700 border-solid w-4/5 ml-[10%] my-10"></div>
            <About />
            <Footer />
        </main>
    );
}