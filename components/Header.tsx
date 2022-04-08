import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = (): JSX.Element =>{
    return (

        <>
        <div className=" justify-between  pl-0 flex  md:justify-start flex-row w-full top-0 sticky text-sky-50 bg-[#0b0c22] py-4 px-2 z-50 shadow-md">
            
        <div className = 'z-50 md:hidden left-0'>
                    <Navigation link={[{label: 'HOME', href:'home'}, {label: 'ABOUT', href:'about'}, { label: 'TOKEN',href:'token' },
                    {label:'OUR MAINROAD', href:'mainroad'},
                    {label:'OUR ACTIVITY', href:'activity'},
                    { label: 'TEAM',href:'team'},
                {label:'CONTACT', href:'contact'} ]}/>
                </div>
            
            <div className="flex items-center  flex-col md:justify-start  relative md:flex-row justify-center  ">
                {/* logo */}
               <img 
                src="/logo.png"
                className="object-contain h-12"
                />
                <h1 className="text-lg font-semibold">META WEB INU </h1>
            </div>

            <div className="hidden md:flex flex-row flex-1 justify-center text-lg font-semibold text-white items-center">
                {/* Header items */}
                <a className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">HOME</a>
                <a className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">ABOUT </a>
                <a className="mx-3 text-sm sm:text-lg md:text-base cursor-pointer">TOKEN </a>
                <Link href={'#team'} scroll={true}><a className="mx-3 cursor-pointer" >TEAM </a></Link>
                
                <a className="mx-3 cursor-pointer">ROADMAP </a>
                <a className="mx-3 cursor-pointer">CONTACTS </a>
            </div>

        </div>

            </>
        
    )
}

export default Header;