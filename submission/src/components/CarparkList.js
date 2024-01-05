import React from "react";
import "./styles.css"; // Import CSS

function CarparkList({ data }) {
  return (
    <div className="table-container">
      <table>
        {/* Table Head */}
        <thead>
          <tr>
            <th>Carpark ID</th>
            <th>Total Lots</th>
            <th>Lot Type</th>
            <th>Available Lots</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {data.map((carpark, index) => (
            <tr key={index}>
              <td>{carpark.carpark_number}</td>
              {carpark.carpark_info.map((info, idx) => (
                <React.Fragment key={idx}>
                  <td>{info.total_lots}</td>
                  <td>{info.lot_type}</td>
                  <td>{info.lots_available}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarparkList;
