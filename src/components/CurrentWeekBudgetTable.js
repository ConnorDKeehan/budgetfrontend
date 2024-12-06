import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ApiService from "../api/api";

export const CurrentWeekBudgetTable = () => {
  const [data, setData] = useState([]);
  const { apiKey } = useContext(GlobalContext);

  useEffect(() => {

    setDataFromApi();
  }, [apiKey]);

  const setDataFromApi = async () => {
    try {
        const apiService = new ApiService(apiKey);
        const transactions = await apiService.getCurrentWeekBudget();
        setData(transactions);
      } catch (error) {
        console.error("Error fetching budget data:", error);
      }
  }

  const handleInputChange = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

  const handleApply = async () => {
    try {
      const apiService = new ApiService(apiKey);
      const updatedBudgets = data.map(({ category, budget }) => ({
        category,
        amount: budget,
      }));
      await apiService.updateBudget(updatedBudgets);
      await setDataFromApi();
      console.log("Budgets updated successfully!", updatedBudgets);
    } catch (error) {
      console.error("Error updating budgets:", error);
    }
  };

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
                <td key={col}>
                  {col.toLowerCase() === "budget" && item["category"] != "Total" ? (
                    <input
                      type="number"
                      value={item[col]}
                      onChange={(e) =>
                        handleInputChange(index, col, parseFloat(e.target.value))
                      }
                    />
                  ) : (
                    item[col]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleApply}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Apply
      </button>
    </div>
  );
};
