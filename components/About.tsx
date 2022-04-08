import Image from 'next/image';


const About = ()=>{
    return <section className="bg-white ">
        <div className="flex flex-col px-6 md:px-[5%] md:grid md:grid-cols-2 sm:p-5  lg:p-[10%] ">
            {/* left */}
            <div className='flex flex-col justify-center items-start space-y-4'>
                <p>The world’s only enterprise blockchain solution for global payments</p>
                <h2 className='text-3xl font-md text-gray-700'>(Meta Web Inu) will be Listing on HOTBIT, BITMART, LATOKEN, LBANK, BITBNS, GATE.IO & MANY MORE BIG EXCHANGES</h2>
                <p>Welcome to Meta Web Inu (META WEB), a community-driven, equitably
launched, decentralized (metaverse, NFT & meme coin) on Binance Smart
Chain where we can create/buy or sold memes NFT. These memes
character can be auctioned & seen in metaverse world when we dives
into it. Later on, the total number of 100K cabbed plots will be created
& can be bough with (META WEB) coins. It aims to be the world’s
Largest NFT Metaverse coin. Meta Web Inu (META WEB) is largely
inspired by the success of meme coin Shiba Inu & NFT coin Decentraland(MANA), from that we started a project on it and it may kill both Shiba Inu and Decentraland(MANA) in 2022.</p>
                {/* <p>Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <p>Webicode   -   Ceo/Founder Chain</p> */}
            </div>

            {/* right */}
            <div className='relative h-[350px]'>
                <Image
                 layout='fill'
                 objectFit='contain'
                 src="/About.png"
                />
            </div>
        </div>
    </section>
}

export default About;