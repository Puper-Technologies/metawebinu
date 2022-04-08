import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () =>{

    return <section className="relative h-80 w-full flex  justify-center items-center">
        <Image className="brightness-50" src={'https://demos.webicode.com/html/ico-chain/html/images/com-bg.jpg'}
            layout='fill'
            objectFit='cover'
            onDragStart={(e)=>e.preventDefault()}
        />
        <div className='absolute z-10 flex justify-center items-center  flex-col space-y-2 sm:space-y-4 md:flex-row md:space-x-8'>
            {/* left */}
            <div className="">
                <h1 className="text-4xl text-white font-weight">Join our community</h1>
                <div>
                    {/* social media icons */}
                </div>
            </div>

            {/* right */}
            
            <div className="flex space-x-2 flex-1 ">
                <input className="px-2 py-2 text-sm shadow-md rounded-md w-[240px]" placeholder="Enter your Email address"/>
                <button className="p-2 text-white bg-[#0b0c22] rounded-lg shadow-lg" >SEND</button>
            </div>
        </div>
    </section>
}


export default Contact;

