import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex flex-col justify-center items-center gap-3 w-full h-[38rem] text-white">
            <h1 className="text-xl font-medium">I'm <span className="text-2xl font-bold">Abraham Mahanaim</span> a Fullstack Developer from Indonesia</h1>
            <h4 className="text-lg">I design and code with full passion</h4>
            <Image
                src="/images/banner.jpeg"
                width={360}
                height={360}
                className="rounded-full mt-5"
                style={{ objectFit: 'cover' }}
                alt="Banner Image"
            />
        </div>
    );
}