import Image from 'next/image';

export default function Team() {
  return (
    <section id='team' className="">
                <div className=" flex flex-col items-center px-[10%] text-white space-y-8 py-[5%]">
                    <h1 className=" text-black text-4xl font-semibold">Our Senior Team Leads</h1>    
                    <p className="text-sm text-gray-700 ">
                        {/* banner body */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras posuere ligula ut blandit varius.
                    </p>
                {/* images */}
                    <div className="flex flex-row space-x-4">
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="https://demos.webicode.com/html/ico-chain/html/images/team-img-4.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="https://demos.webicode.com/html/ico-chain/html/images/team-img-3.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="https://demos.webicode.com/html/ico-chain/html/images/team-img-2.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                    </div>
            </div>

    </section>
  )
}
