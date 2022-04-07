
const Header = (): JSX.Element =>{
    return (
        <div className="flex flex-row w-full top-0 sticky text-sky-50 bg-gray-800 py-4 px-2 z-50 ">
            <div className="flex flex-row justify-center items-center">
                {/* logo */}
                <p>LOGO</p>
            </div>

            <div className="flex flex-row flex-1 justify-center items-center">
                {/* Header items */}
                <a className="mx-3 cursor-pointer">Home</a>
                <a className="mx-3 cursor-pointer">about </a>
                <a className="mx-3 cursor-pointer">token </a>
                <a className="mx-3 cursor-pointer" href="#activity">activity </a>
                <a className="mx-3 cursor-pointer">roadmap </a>
            </div>
        </div>
    )
}

export default Header;