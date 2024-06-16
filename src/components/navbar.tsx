import Link from "next/link";

const menuItems = [
    {
        title: 'About',
        path: '#'
    },
    {
        title: 'Projects',
        path: '#'
    },
    {
        title: 'Contact',
        path: '#'
    },
];

export default function Navbar() {
    const RenderNavButton = () => {
        return (
            <div className="flex w-[20%] mr-10 justify-around items-center">
                {menuItems.map((menuItem, index) => {
                    return <Link className="font-sans hover:text-amber-700" key={index} href={menuItem.path}>{menuItem.title}</Link>;
                })}
            </div>
        );
    }

    return (
        <nav className="shadow-sm shadow-orange-800">
            <div className="w-full h-16 flex justify-between">
                <div className="w-[60%] flex items-center">
                    <button className="font-sans text-amber-50 bg-amber-700 py-1.5 px-2.5 rounded-md ml-32">Download My CV</button>
                </div>
                <RenderNavButton/>
            </div>
        </nav>
    );
}