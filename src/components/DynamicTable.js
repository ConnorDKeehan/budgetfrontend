import React from "react";

const DynamicTable = ({ data }) => {

  if (data.length === 0) {
    return <p>No data available</p>;
  }

  // Get column names from the keys of the first object
  const columns = Object.keys(data[0]);

  return (
    <div>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{item[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
