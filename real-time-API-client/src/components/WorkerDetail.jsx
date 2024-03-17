import React from "react";

const WorkerDetail = ({ workerDetail }) => {
  return (
    <>
      <div className="border border-gray-300 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Worker Detail</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Render</th>
              <th className="px-4 py-2 border border-gray-300">Bandwidth</th>
              <th className="px-4 py-2 border border-gray-300">Storage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                {workerDetail.capacity} {" IB"}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {workerDetail.bandwidth}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {workerDetail.storage}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-4">
          <p className="text-gray-300">Longitude: {workerDetail.longitude}</p>
          <p className="text-gray-300">Latitude: {workerDetail.latitude}</p>
          <p className="text-gray-300">
            Register date: {workerDetail.created_at}
          </p>
        </div>
        <h3 className="text-lg font-semibold mb-2">Hardware</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">GPU</th>
              <th className="px-4 py-2 border border-gray-300">RAM</th>
              <th className="px-4 py-2 border border-gray-300">CPU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                {workerDetail.gpu_name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {workerDetail.Rammemory}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {workerDetail.cpu}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WorkerDetail;
