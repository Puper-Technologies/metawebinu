import Doughnut from "./Doughnut";

function Token() {
  return (
    <section className=" bg-[#0b0c22] w-full py-16 sm:p-5" id='token'>
      <div className=" flex flex-col space-y-8 md:space-y-0 md:flex-row justify-center px-[10%] py-4 text-white">
        {/* left */}
        <div>
          <h1 className="text-4xl">
           Token Allocation <br />  
          </h1>
            <p> Crypto token will be released on the basis of our Token Allocation</p>
          
          {/* card */}
          <div className="block p-6 rounded-lg shadow-lg bg-gray-800 shadown-md max-w-md mt-5 space-y-4">
            <h5 className=" text-white text-xl leading-tight font-medium mb-2">
            </h5>
            {/* Timer section */}
            <div className="flex w-full justify-between">
                <div>
                    {/* days */}
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-xl font-semibold">Days</h3>
                </div>
                <div>
                    {/* days */}
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-xl font-semibold">Days</h3>
                </div>
                <div>
                    {/* days */}
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-xl font-semibold">Days</h3>
                </div>
                <div>
                    {/* days */}
                    <h1 className="text-3xl font-bold">00</h1>
                    <h3 className="text-xl font-semibold">Days</h3>
                </div>
            </div>

            <div className="flex justify-center space-x-4">
                <button
                type="button"
                className=" inline-block px-8 py-2.5 bg-sky-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 active:scale-95 ease-in-out"
                >
                Join Us
                </button>

                <button className=" inline-block px-8 py-2.5 bg-violet-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 active:scale-95 ease-in-out">
                    Buy Now
                </button>
            </div>


            
          </div>

                              {/* right */}
           
        </div>
        <div> <Doughnut/> </div>
      </div>
    </section>
  );
}



  

export default Token;
