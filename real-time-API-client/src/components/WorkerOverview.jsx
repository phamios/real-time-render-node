import React from "react";

const WorkerOverview = ({ PCname, capacity }) => {
  return (
    <>
      <span>{PCname}</span>
      <br />
      <span>Capacity: {capacity} IB</span>
    </>
  );
};

export default WorkerOverview;
