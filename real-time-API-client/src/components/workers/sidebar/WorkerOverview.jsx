import React from "react";
import "../../css/WorkerOverview.css";

const WorkerOverview = ({ PCname, capacity }) => {
  return (
    <div className="d-flex worker-item">
      <div className="basic-data">
        <div className="d-flex worker-basic-info">
          <div className="worker-name">{PCname}</div>
          <div className="d-flex worker-capability">
            <div className="capa-text" style={{ textAlign: "left" }}>
              Capability
            </div>
            <div className="d-flex capability" style={{ textAlign: "left" }}>
              {capacity} IB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerOverview;
