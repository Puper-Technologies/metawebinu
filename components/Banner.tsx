import Particles from "react-tsparticles"


export default (): JSX.Element =>{

    const particlesInit = async (main: any) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(main);
      };
    

      return (
          <div className="flex flex-col justify-center items-center">
                <Particles className="w-full"
            id="tsparticles"
            height = "100vh"
            width="100%"

            options={{
                background: {
                color: {
                    value: "#0b0c22",
                },
                },

                fullScreen: false,
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#FFFF00",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
            />
                <div className="absolute flex flex-col items-center px-[10%] text-white space-y-8">
                    <h1 className=" text-white text-4xl font-bold">Build a new kind of Decentralized</h1>    
                    <p className="text-lg ">
                        {/* banner body */}
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </p>
                {/* buttons */}
                    <div className="flex flex-row space-x-4">
                        <button className="py-4 px-8  bg-sky-700 shadow-sm rounded-md  active:scale-95"> Join Us </button>
                        <button className="py-4 px-8 shadow-sm rounded-md  bg-violet-700 active:scale-95">VIEW WHITE PAPER</button> 
                    </div>
            </div>
           
          </div>
        
      );
}