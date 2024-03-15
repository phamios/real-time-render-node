import React, { useEffect, useState } from "react";
import WorkerList from "../data/WorkerList.json";
import DropDown from "./DropDown";
import "./SideBar.css"

const SideBar = ({ changeToLocation }) => {
  const [workerList, setWorkerList] = useState([]);
  const [totalNode, setTotalNode] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0);

  useEffect(() => {
    const loadData = () => JSON.parse(JSON.stringify(WorkerList));
    const data = loadData();
    setWorkerList(data);
    calculateTotals(data);
  }, []);

  const calculateTotals = (data) => {
    let totalNodeCount = 0;
    let totalCapacityCount = 0;

    data.forEach((worker) => {
      if (worker.status === "Active") {
        totalNodeCount++;
        totalCapacityCount += worker.capacity;
      }
    });

    setTotalNode(totalNodeCount);
    setTotalCapacity(totalCapacityCount);
  };

  return (
    <div className="text-white p-4 sidebar no-margin">
      <div className="text-center mb-4 total-capacity no-margin">
        <h2 className="text-lg font-bold">Total nodes and serving capacity</h2>
        <div className="flex justify-center mt-2">
          <div className="p-2 bg-blue-700 rounded-md">
            <p className="text-2xl font-bold">{totalNode}</p>
            <p>Total nodes</p>
          </div>
          <div className="p-2 bg-blue-700 rounded-md ml-4">
            <p className="text-2xl font-bold">{totalCapacity}</p>
            <p>Serving capacity</p>
          </div>
        </div>
      </div>
      <div className="no-margin">
        <ul className="no-margin" id="worker-list">
          {workerList.map((worker) => (
            <li key={worker.id} className="mb-2 worker no-margin">
              <DropDown worker={worker} changeToLocation={changeToLocation} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
