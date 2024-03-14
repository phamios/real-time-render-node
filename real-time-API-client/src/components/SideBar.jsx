import React, { useEffect, useState } from "react";
import WorkerOverview from "./WorkerOverview";

const SideBar = () => {
  const [workerList, setWorkerList] = useState([]);
  const [totalNode, setTotalNode] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0);

  useEffect(() => {
    fetch("../data/WorkerList.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWorkerList(data);
        calculateTotals(data);
      })
      .catch((error) => console.log(error));
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

  const workerOverviews = workerList.map((worker) => (
    <WorkerOverview
      key={worker.id}
      PCname={worker.pcname}
      capacity={worker.capacity}
    />
  ));

  return (
    <>
      <span>
        <h4>Total Nodes: {totalNode}</h4>
      </span>{" "}
      <span>
        <h4>Serving capacity: {totalCapacity}</h4>
      </span>
      <br />
      {workerOverviews}
    </>
  );
};

export default SideBar;
