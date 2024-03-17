import React, { useState, useEffect } from "react";
import "../../css/ListTaskLog.css";
// import "./css/ListTaskLog.css";

const ListTaskLogDetail = ({ task = null, ListTaskLogDetail }) => {
  const [listDetailTaskLog, setListDetailTaskLog] = useState([]);

  useEffect(() => {
    getListDetailTaskLog(ListTaskLogDetail, task);
  }, [ListTaskLogDetail, task]);

  function getListDetailTaskLog(ListTaskLogDetail, task) {
    if (task && ListTaskLogDetail) {
      const filteredTasks = ListTaskLogDetail.filter(
        (filteredTask) => filteredTask.rootID === task.id
      );
      setListDetailTaskLog(filteredTasks);
    }
  }

  const showTaskPreview = task && (
    <div key={task.id}>
      <img height={"300px"} width={"300px"} src={task.url} alt="penhouse" />
      <div>ID: {task.id}</div>
      <div>Name: {task.nametask}</div>
      <div>Status: {task.status}</div>
      <div>Type: {task.type}</div>
      <div>Priority: {task.priority}</div>
      <div>Created: {task.created_at}</div>
      <div>Updated: {task.updated_at}</div>
      <div>Activity: {task.activity}</div>
    </div>
  );

  const list = listDetailTaskLog.map((detailTask) => {
    return (
      <tr key={detailTask.id}>
        <td style={{ flex: "2 1 0%", minWidth: "75px" }}>
          <div className="task-status">{detailTask.status}</div>
        </td>
        <td style={{ flex: "4 1 0%", maxWidth: "235px" }}>
          <div className="text_truncate">{detailTask.taskname}</div>
        </td>
        <td style={{ flex: "3 1 0%" }}>{detailTask.updated_at}</td>
        <td style={{ flex: "1 1 0%" }}>{detailTask.reported_work}</td>
        <td
          style={{
            flex: "3 1 0%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {detailTask.PoR_work}
        </td>
      </tr>
    );
  });
  console.log(task);

  //   removeTheDummyDiv();

  return (
    <div className="detail-tasklog">
      {task === null && (
        <p
          id="selectNotification"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Select a task to view details
        </p>
      )}
      {task !== null && (
        <div>
          <div className="detail-task">
            <div className="task-info">
              <div className="task-setting-info">{showTaskPreview}</div>
            </div>
          </div>
          <div className="d-flex task-table-detail">
            <div className="d-flex table-header">
              <div style={{ flex: "2", minWidth: "80px", textAlign: "left" }}>
                Status
              </div>
              <div style={{ flex: "4", textAlign: "left" }}>Name</div>
              <div style={{ flex: "3", minWidth: "160px", textAlign: "left" }}>
                Updated
              </div>
              <div style={{ flex: "1", textAlign: "left" }}>Report Work</div>
              <div style={{ flex: "1", textAlign: "left" }}>PoR Work</div>
            </div>
            <table className="table-content">
              <tbody>{list}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListTaskLogDetail;
