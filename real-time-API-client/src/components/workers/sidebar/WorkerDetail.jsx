import React from "react";
import "../../css/WorkerDetail.css";

const WorkerDetail = ({ workerDetail }) => {
  return (
    <div className="tab-d-flex tab-content tab-capability">
      <div className="d-flex content-top">
        <div style={{ color: "rgb(255, 255, 255)" }}>
          <div>Render</div>
          <div className="d-flex content-top-param">
            <div className="content-top-value">{workerDetail.capacity}</div>{" "}
            <div>IB</div>
          </div>
        </div>
        <div style={{ color: "var(--mint, #4f95ab)" }}>
          <div>Bandwidth</div>
          <div className="d-flex content-top-param">
            <div className="content-top-value">{workerDetail.bandwidth}</div>
          </div>
        </div>
        <div style={{ color: "rgb(98, 149, 249)", minWidth: "50px" }}>
          <div>Storage</div>
          <div className="d-flex content-top-param">
            <div className="content-top-value">{workerDetail.storage}</div>
          </div>
        </div>
      </div>
      <div className="d-flex content-middle">
        <div className="d-flex" style={{ margin: "5px 0px" }}>
          <div style={{ flex: "1 1 0%", color: "var(--LB, #afcaff)" }}>
            Longitude:{" "}
          </div>
          <div style={{ flex: "2 1 0%" }}>{workerDetail.longitude}</div>
        </div>
        <div className="d-flex" style={{ margin: "5px 0px" }}>
          <div style={{ flex: "1 1 0%", color: "var(--LB, #afcaff)" }}>
            Latitude:{" "}
          </div>
          <div style={{ flex: "2 1 0%" }}> {workerDetail.latitude}</div>
        </div>
        <div className="d-flex" style={{ margin: "5px 0px" }}>
          <div
            style={{
              flex: "1 1 0%",
              color: "var(--LB, #afcaff)",
              marginBottom: "5px",
            }}
          >
            Hardware
          </div>
        </div>
      </div>
      <div className="d-flex content-bottom">
        <div className="content-bottom-item">
          <div style={{ color: "var(--LB, #afcaff)" }}>GPU</div>
          <div className="d-flex content-bottom-param">
            <div>{workerDetail.gpu_name}</div>
          </div>
        </div>
        <div className="content-bottom-item">
          <div style={{ color: "var(--LB, #afcaff)" }}>RAM</div>
          <div className="d-flex content-bottom-param">
            <div>{workerDetail.Rammemory}</div>
          </div>
        </div>
        <div className="content-bottom-item">
          <div style={{ color: "var(--LB, #afcaff)" }}>CPU</div>
          <div className="d-flex content-bottom-param">
            <div>{workerDetail.cpu}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetail;
