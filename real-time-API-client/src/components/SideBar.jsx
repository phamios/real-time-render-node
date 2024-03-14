import React, { useEffect, useState } from "react";
// import WorkerOverview from "./WorkerOverview";
import WorkerList from "../data/WorkerList.json";

const SideBar = () => {
  const sideBarStyle = {
    color: "bg-sky-50",
    backgroundColor: "rgb(37, 150, 190)",
    padding: "10px",
    fontFamily: "Arial",
  };
  const [workerList, setWorkerList] = useState([]);
  const [totalNode, setTotalNode] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0);

  useEffect(() => {
    // Function to load data from JSON
    const loadData = () => JSON.parse(JSON.stringify(WorkerList));

    // Load data and set worker list
    const Data = loadData();
    setWorkerList(Data);
    console.log(Data);

    // Calculate totals
    calculateTotals(Data);
  }, []);

  const calculateTotals = (data) => {
    let totalNodeCount = 1;
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

  const workerOverviews = workerList.map((worker) => (
    <tr key={worker.id}>
      <td>{worker.pcname}</td>
      <td>{worker.capacity}</td>
    </tr>
  ));

  return (
    <>
      <div id="sideBar" style={sideBarStyle}>
        <table className="table-responsive">
          <thead>
            <th>Total nodes</th>
            <th>Serving capacity</th>
          </thead>
          <tbody>
            <tr>
              <td>{totalNode}</td>
              <td>{totalCapacity}</td>
            </tr>
            {workerOverviews}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SideBar;
