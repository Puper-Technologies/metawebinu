import Image from "next/image";
import Link from "next/link";

const Header = (): JSX.Element =>{
    return (
        <div className="hidden  md:flex  flex-row w-full top-0 sticky text-sky-50 bg-[#0b0c22] py-4 px-2 z-50 shadow-md">
            <div className="flex relative flex-row justify-center  items-center">
                {/* logo */}
               <img 
                src="/logo.png"
                className="object-contain h-12"
                />
                <h1 className="text-lg font-semibold">META WEB INU </h1>
            </div>

            <div className="flex flex-row flex-1 justify-center text-lg font-semibold text-white items-center">
                {/* Header items */}
                <a className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">HOME</a>
                <a className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">ABOUT </a>
                <a className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">TOKEN </a>
                <Link href={'#team'} scroll={true}><a className="mx-3 cursor-pointer" >TEAM </a></Link>
                
                <a className="mx-3 cursor-pointer">ROADMAP </a>
                <a className="mx-3 cursor-pointer">CONTACTS </a>
            </div>
        </div>
    )
}

export default Header;