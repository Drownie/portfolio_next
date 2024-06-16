export default function Banner() {
    return (
        <div className="flex w-full h-[38rem]">
            <div className="flex flex-col justify-center items-center w-2/4 px-32">
                <h2 className="text-4xl font-sans text-center">Unlocking Digital Possibilities: <span className="text-amber-700">Drownie</span>, a Fullstack Developer from Indonesia</h2>
                <button className="mt-10 bg-amber-700 px-3 py-2 rounded-md text-amber-50 hover:bg-amber-900">Learn more</button>
            </div>
            <div className="flex justify-center items-center w-2/4">
                <img src="/images/banner.jpeg" alt="Banner image" className="h-96 rounded-full"/>
            </div>
        </div>
    );
}