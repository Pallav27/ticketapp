import React from "react";

const StatusDisplay = ({ status = "" }) => {
  const getColor = (status) => {
    if (!status) return "bg-slate-700"; // Default color if status is undefined/null

    switch (status.toLowerCase()) {
      case "finished":
        return "bg-green-500";
      case "started":
        return "bg-yellow-200";
      case "not started":
        return "bg-red-200";
      default:
        return "bg-slate-700";
    }
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status || "Unknown"}
    </span>
  );
};

export default StatusDisplay;
