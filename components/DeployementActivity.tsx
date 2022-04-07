import {
  faBuilding,
  faRotate,
  faHandHoldingDollar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Deployement = (): JSX.Element => {
  return (
    <div className="container mx-auto px-12 mb-20 mt-20">
      <div className="text-center text-gray-800 mb-8">
        <h2 className="text-4xl">Development Activity</h2>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh
        dolor, efficitur eget pharetra ac, <br /> cursus sed sapien. Cras
        posuere ligula ut blandit varius.
      </div>
      <div className="flex flex-wrap justify-evenly items-center px-6">
        <div>
          <FontAwesomeIcon icon={faRotate} style={{ fontSize: 60 }} />
          <div className="text-center">
            <h2 className="font-medium text-4x1 mt-2 text-xl">4 hrs Ago</h2>
            <h4 className="text-gray text-sm">Last Update</h4>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 60 }} />

          <div className="text-center">
            <h2 className="font-medium text-4x1 mt-2 text-xl">10 Days Ago</h2>
            <h4 className="text-gray text-sm">Last Block Found </h4>
          </div>
        </div>

        <div className="items-center">
          <FontAwesomeIcon
            icon={faHandHoldingDollar}
            style={{ fontSize: 60 }}
          />

          <div className="text-center">
            <h2 className="font-medium text-4x1 mt-2 text-xl">45057+</h2>
            <h4 className="text-gray text-sm">Contributions </h4>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faPeopleGroup} style={{ fontSize: 60 }} />

          <div className="text-center self-center">
            <h2 className="font-medium text-4x1 mt-2 text-xl">80</h2>
            <h4 className="text-gray text-sm">Team Members</h4>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-10">
        <button
          type="button"
          className="inline-block px-12 py-3 bg-gray-800 text-white font-medium text-m leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          start on github
        </button>

        <button
          type="button"
          className="inline-block px-12 py-3 bg-yellow-500 text-white font-medium text-m leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          white paper
        </button>
      </div>
    </div>
  );
};

export default Deployement;
