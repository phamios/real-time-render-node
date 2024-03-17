import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import WorkerOverview from "./WorkerOverview";
import WorkerDetail from "./WorkerDetail";
import NavBarWorkerDetail from "./NavBarWorkerDetail";
import TaskLog from "./TaskLog";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ worker, changeToLocation }) {
  const [showWorkerDetail, setShowWorkerDetail] = useState(true);
  const [showTaskLog, setShowTaskLog] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleWorkerDetailClick = () => {
    setShowWorkerDetail(true);
    setShowTaskLog(false);
  };

  const handleTaskLogClick = () => {
    setShowWorkerDetail(false);
    setShowTaskLog(true);
  };

  function expandDiv(element) {
    if (!element) {
      return;
    }
    if (element.classList.contains("collapsed")) {
      element.classList.remove("collapsed");
      element.classList.add("expanded");
      setShowContent(true);
    } else {
      element.classList.remove("expanded");
      element.classList.add("collapsed");
      setShowContent(false);
    }
  }

  return (
    <Menu
      as="div"
      className="relative inline-block text-left collapsed fit-parent no-margin"
      onClick={(event) => {
        expandDiv(event.target);
        changeToLocation(worker.longitude, worker.latitude);
      }}
    >
      <div className="fit-parent full-data">
        {/* <Menu.Button className="inline-flex items-center min-w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"> */}
        <WorkerOverview PCname={worker.pcname} capacity={worker.capacity} />
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400 absolute right-0 top-4"
          aria-hidden="true"
        />
        {/* </Menu.Button> */}
      </div>

      {showContent && (
        <div id="full-data">
          <NavBarWorkerDetail
            handleWorkerDetailClick={handleWorkerDetailClick}
            handleTaskLogClick={handleTaskLogClick}
          />
          {showWorkerDetail && <WorkerDetail workerDetail={worker} />}
          {showTaskLog && <TaskLog />}
        </div>
      )}

      {/* <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <NavBarWorkerDetail
            handleWorkerDetailClick={handleWorkerDetailClick}
            handleTaskLogClick={handleTaskLogClick}
          />

          <div className="py-1 worker-detail">
            {showWorkerDetail && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <WorkerDetail workerDetail={worker} />
                  </a>
                )}
              </Menu.Item>
            )}
            {showTaskLog && (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <TaskLog />
                  </a>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition> */}
    </Menu>
  );
}
