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
                    <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-4">
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="/Edward.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="/Jonathan.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="/YCLau.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>
                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="/MikeChiam.jpg"
                                objectFit='cover'
                                layout='fill'
                                className='rounded-full'
                            />
                        </div>

                        <div className='relative h-40 w-40 rounded-full'>
                            <Image 
                                src="/Richard.jpg"
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
