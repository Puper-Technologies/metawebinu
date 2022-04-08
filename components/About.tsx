import Image from 'next/image';


const About = ()=>{
    return <section className="bg-white ">
        <div className="flex flex-col px-6 md:px-[5%] md:grid md:grid-cols-2 sm:p-5  lg:p-[10%] ">
            {/* left */}
            <div className='flex flex-col justify-center items-start space-y-4'>
                <p>The world’s only enterprise blockchain solution for global payments</p>
                <h2 className='text-3xl font-md text-gray-700'>Best Blockchain & Better Than Any Blockchain</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <p>Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <p>Webicode   -   Ceo/Founder Chain</p>
            </div>

            {/* right */}
            <div className='relative h-[350px]'>
                <Image
                 layout='fill'
                 objectFit='contain'
                 src="https://demos.webicode.com/html/ico-chain/html/images/chain-img.png"
                />
            </div>
        </div>
    </section>
}

export default About;