import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex w-full h-[38rem] flex-wrap-reverse">
            <div className="flex flex-col justify-center items-center md:w-2/4 w-full md:px-32 px-10 md:mt-0 mt-[-6rem]">
                <h2 className="md:text-4xl text-2xl md:mt-0 mt-[-4rem] font-sans text-center">Unlocking Digital Possibilities: <span className="text-amber-700">Drownie</span>, a Fullstack Developer from Indonesia</h2>
                <button className="md:mt-10 mt-4 bg-amber-700 px-3 py-2 rounded-md text-amber-50 hover:bg-amber-900 md:text-base text-sm">Learn more</button>
            </div>
            <div className="flex justify-center items-center md:w-2/4 w-full">
                <div className="relative md:h-96 h-56 md:w-96 w-56 rounded-full overflow-hidden">
                    <Image 
                        src="/images/banner.jpeg" 
                        fill 
                        alt="Banner image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}