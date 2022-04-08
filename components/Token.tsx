import Doughnut from "./Doughnut";
// import { reactDonutChartBackgroundColor, reactDonutChartdata, reactDonutChartHandleClick, reactDonutChartInnerRadius, reactDonutChartOnMouseEnter, reactDonutChartSelectedOffset, reactDonutChartStrokeColor } from "./Donut.mjs";

function Token() {
    console.log(reactDonutChartBackgroundColor)
  return (
    <section className="container bg-[#0b0c22] py-16 sm:p-5">
      <div className=" flex flex-col md:flex-row justify-center px-[10%] py-4 text-white">
        {/* left */}
        <div>
          <h1 className="text-4xl">
            Total Distribution Section <br /> End <b>350/350 </b>
          </h1>
            <p> ICO Crypto token will be released on the basis of Ethereum and Bitocin</p>
          platform.
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


export const reactDonutChartdata = [
    {
      label: "NDC",
      value: 25,
      color: "#00E396"
    },
    {
      label: "RDC",
      value: 65,
      color: "#FEB019"
    },
    {
      label: "STOCKIST",
      value: 100,
      color: "#FF4560"
    },
    {
      label: "HOSPITAL",
      value: 15,
      color: "#775DD0"
    }
  ];
  export const reactDonutChartBackgroundColor = [
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0"
  ];
  export const reactDonutChartInnerRadius = 0.5;
  export const reactDonutChartSelectedOffset = 0.04;
//   export const reactDonutChartHandleClick = (item:any, toggled: any) => {
//     if (toggled) {
//       console.log(item);
//     }
//   };
  
  
  export let reactDonutChartStrokeColor = "#FFFFFF";
//   export const reactDonutChartOnMouseEnter = (item) => {
//     let color = reactDonutChartdata.find((q)=> q.label === item.label).color;
//     reactDonutChartStrokeColor = color;
//   };
  
  

export default Token;
