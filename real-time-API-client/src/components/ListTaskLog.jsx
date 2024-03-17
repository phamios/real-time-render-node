import React, { useState, useEffect } from "react";
import TaskLogList from "../data/TaskLogList.json";
import "./css/ListTaskLog.css";

const ListTaskLog = ({ taskLog, showDetail }) => {
  // const [taskLog, setTaskLog] = useState([]);

  // useEffect(() => {
  //   // Function to load data from JSON
  //   const loadData = () => JSON.parse(JSON.stringify(TaskLogList));

  //   // Load data and set worker list
  //   const data = loadData();
  //   setTaskLog(data);
  //   console.log(data);
  // }, []);

  function hideTag(id) {
    document.getElementById(id).style.display = "none";
  }

  const list = taskLog.map((task) => {
    return (
      <tr
        key={task.id}
        onClick={() => {
          showDetail(task);
          hideTag("selectNotification");
        }}
      >
        <td style={{ flex: "2 1 0%", minWidth: "130px" }}>
          <div className="task-status">{task.status}</div>
        </td>
        <td style={{ flex: "4 1 0%", minWidth: "200px", maxWidth: "235px" }}>
          <div className="text_truncate">{task.nametask}</div>
        </td>
        <td style={{ flex: "3 1 0%", minWidth: "180px" }}>{task.type}</td>
        <td style={{ flex: "1 1 0%", minWidth: "100px" }}>{task.priority}</td>
        <td
          style={{
            flex: "3 1 0%",
            minWidth: "150px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {task.updated_at}
        </td>
      </tr>
    );
  });

  return (
    <div className="task-view">
      {!taskLog.length && <p>No tasks found</p>}
      <div className="table-container">
        <table className="d-flex task-table-detail">
          <thead className="table-header">
            <tr>
              <th style={{ flex: "2", minWidth: "130px", textAlign: "left" }}>
                Status
              </th>
              <th style={{ flex: "4", minWidth: "200px", textAlign: "left" }}>
                Name
              </th>
              <th style={{ flex: "3", minWidth: "180px", textAlign: "left" }}>
                Type
              </th>
              <th style={{ flex: "1", minWidth: "100px", textAlign: "left" }}>
                Priority
              </th>
              <th style={{ flex: "3", minWidth: "150px", textAlign: "left" }}>
                Update
              </th>
            </tr>
          </thead>
          <tbody className="table-content">{list}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTaskLog;
