import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export function Login() {
    const [inputApiKey, setInputApiKey] = useState(""); // State to track input
    const { setApiKey, setHasApiKeyBeenEntered } = useContext(GlobalContext); // Get `setApiKey` from context

    // Helper to get a cookie by name
    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? decodeURIComponent(match[2]) : null;
    };

    // Helper to set a cookie
    const setCookie = (name, value, days) => {
        const expires = new Date();
        expires.setDate(expires.getDate() + days);
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
    };

    // Check if the API key exists in cookies on load
    useEffect(() => {
        const storedApiKey = getCookie("apiKey");
        if (storedApiKey) {
            setApiKey(storedApiKey); // Set the global API key
            setHasApiKeyBeenEntered(true);
        }
    }, [setApiKey, setHasApiKeyBeenEntered]);

    const handleButtonClick = () => {
        setApiKey(inputApiKey); // Update global `apiKey`
        setCookie("apiKey", inputApiKey, 7); // Store the API key in cookies for 7 days
        setInputApiKey(""); // Clear the input field
        setHasApiKeyBeenEntered(true);
    };

    return (
        <div>
            <input
                value={inputApiKey}
                onChange={(e) => setInputApiKey(e.target.value)}
                placeholder="Enter API Key"
            />
            <button onClick={handleButtonClick}>Set API Key</button>
        </div>
    );
}
