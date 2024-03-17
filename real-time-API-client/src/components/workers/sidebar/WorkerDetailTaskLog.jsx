import React, { useState, useEffect } from "react";
import TaskLogDetail from "../../../data/TaskLogDetail.json";
import "../../css/WokerDetailTaskLog.css";

const WorkerDetailTaskLog = ({ workerPcName }) => {
  const [workerDetailTaskLog, setWorkerDetailTaskLog] = useState([]);
  const [showNoti, setShowNoti] = useState(true); // Initially show notification

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(TaskLogDetail));
    setWorkerDetailTaskLog(data);
    console.log(data);
  }, []);

  const filteredTaskLogs = workerDetailTaskLog.filter(
    (taskLog) => taskLog.assigned_to === workerPcName
  );

  useEffect(() => {
    setShowNoti(filteredTaskLogs.length === 0);
  }, [filteredTaskLogs]);

  const ListTaskLog = filteredTaskLogs.map((taskLog, index) => (
    <div key={index} className="task-item">
      <div className="d-flex job-header">
        <div className="text-primary">{taskLog.id}</div>

        <div
          className="d-flex"
          style={{
            flexDirection: "column",
            color: "var(--grayscale-04, #798292)",
          }}
        >
          {taskLog.updated_at}
        </div>

        <div className="job-status">{taskLog.status}</div>
      </div>

      <div style={{ flex: "1 1 0%" }}></div>

      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="text-primary">
          <div>Report Work</div>
          <div className="d-flex text-large">
            <div>{taskLog.reported_work}</div>
          </div>
        </div>

        <div style={{ color: "var(--mint, #4f95ab)" }}>
          <div className="d-flex text-large">
            <div>8 / 9</div>
          </div>
        </div>

        <div style={{ color: "var(--mint, #4f95ab)" }}>
          <div>PoR Work</div>
          <div
            className="d-flex text-large"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            <div>{taskLog.PoR_work}</div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="tab-content">
      {showNoti && <p style={{ textAlign: "center" }}>No task logs found!</p>}
      {ListTaskLog}
    </div>
  );
};

export default WorkerDetailTaskLog;
