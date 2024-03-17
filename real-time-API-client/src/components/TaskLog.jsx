import React, { useEffect, useState } from "react";
import ListTaskLog from "./ListTaskLog";
// import ListTaskLogDetail from "./ListTaskLogDetail";
import "./css/ListTaskLog.css";
import ListTaskLogDetail from "./ListTaskLogDetail";
import TaskLogList from "../data/TaskLogList.json";
import TaskLogDetailList from "../data/TaskLogDetail.json";

function removeTheDummyDiv() {
  var elementToRemove = document.querySelector("div:last-child");
  if (elementToRemove) {
    // Remove the element
    elementToRemove.parentNode.removeChild(elementToRemove);
  } else {
    console.log("Element not found.");
  }
}

const TaskLog = () => {
  const [taskLog, setTaskLog] = useState([]);
  const [TaskLogDetail, setTaskLogDetail] = useState([]);
  const [showDetailTask, setShowDetailTask] = useState(false);
  const [task, setTask] = useState([]);

  useEffect(() => {
    // Function to load data from JSON
    const loadData1 = () => JSON.parse(JSON.stringify(TaskLogList));
    // Load data and set worker list
    const data1 = loadData1();
    setTaskLog(data1);

    const loadData = () => JSON.parse(JSON.stringify(TaskLogDetailList));
    const data = loadData();
    setTaskLogDetail(data);
  }, []);

  function showDetail(task) {
    setTask(task);
    setShowDetailTask(true);
  }
  return (
    <div className="tasklog-containter">
      <ListTaskLog taskLog={taskLog} showDetail={showDetail}></ListTaskLog>
      {showDetailTask && (
        <ListTaskLogDetail
          ListTaskLogDetail={TaskLogDetail}
          task={task}
        ></ListTaskLogDetail>
      )}
      <ListTaskLogDetail ListTaskLogDetail={TaskLogDetail}></ListTaskLogDetail>
    </div>
  );
};

export default TaskLog;
