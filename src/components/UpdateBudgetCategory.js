import React, { useContext, useEffect, useState } from "react";
import ApiService from "../api/api";
import { GlobalContext } from "../contexts/GlobalContext";

const UpdateBudgetCategory = () => {
    const [budgetCategory, setBudgetCategory] = useState("");
    const [id, setId] = useState();
    const {apiKey} = useContext(GlobalContext);

    const handleApply = async () => {
        const apiService = new ApiService(apiKey);
        await apiService.updateBudgetCategory(id, budgetCategory);
        window.location.reload();
    }

    return (
        <div style={styles.container}>
            <input
                value={id}
                type="number"
                placeholder="TransactionId"
                onChange={(e) => setId(e.target.value)}
            />
            <input
                value={budgetCategory}
                placeholder="category"
                onChange={(e) => setBudgetCategory(e.target.value)}
            />
            <button onClick={handleApply}>Apply</button>
        </div>
    );
};

export default UpdateBudgetCategory;

const styles = {
    container: {
        display: "flex",
        flexDirection: "row", // Horizontal layout
        width: "200px",
        justifyContent: "space-between",
        gap: "5px", // Space between the two components
        padding: "20px",
    },
};