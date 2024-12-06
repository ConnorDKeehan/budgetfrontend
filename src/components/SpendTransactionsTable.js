import React, { useContext, useEffect, useState } from "react";
import DynamicTable from "./DynamicTable";
import ApiService from "../api/api";
import { GlobalContext } from "../contexts/GlobalContext";


export const SpendTransactionsTable = () => {
    const [data,setData] = useState([]);
    const {apiKey} = useContext(GlobalContext);

    useEffect(() => {
        const fetchData = async () => {
            const apiService = new ApiService(apiKey);
            const transactions = await apiService.getCurrentWeeksTransactions();
            console.log(transactions);
            setData(transactions);
        };

        fetchData();
        }, []);

    return (
        <DynamicTable data={data}/>
    );
}
  