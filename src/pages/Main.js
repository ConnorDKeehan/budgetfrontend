import React from "react";
import { SpendTransactionsTable } from "../components/SpendTransactionsTable";
import { CurrentWeekBudgetTable } from "../components/CurrentWeekBudgetTable";
import UpdateBudgetCategory from "../components/UpdateBudgetCategory";

export function LandingPage() {
    return (
        <div>
            <UpdateBudgetCategory/>
            <div style={styles.container}>
                <div style={styles.transactionsTable}>
                    <SpendTransactionsTable />
                </div>
                <div style={styles.budgetTable}>
                    <CurrentWeekBudgetTable />
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row", // Horizontal layout
        justifyContent: "space-between",
        gap: "20px", // Space between the two components
        padding: "20px",
    },
    budgetTable: {
        width: "500px", // Smaller width for the budget table
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional styling
        padding: "10px",
        background: "#f9f9f9", // Optional background
        borderRadius: "8px", // Optional rounded corners
    },
    transactionsTable: {
        flex: 1, // Full-width table
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional styling
        padding: "10px",
        background: "#fff", // Optional background
        borderRadius: "8px", // Optional rounded corners
    },
};