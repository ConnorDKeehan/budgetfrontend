const apiBaseUrl = 'http://localhost:5018/';

class ApiService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getCurrentWeeksTransactions() {
        const url = `${apiBaseUrl}Budget/GetCurrentWeeksTransactions`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: this.apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching current week’s transactions:', error);
            throw error;
        }
    }

    async getCurrentWeekBudget() {
        const url = `${apiBaseUrl}Budget/GetCurrentWeekBudget`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: this.apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error GetCurrentWeekBudget:', error);
            throw error;
        }
    }

    async updateBudget(data) {
        const url = `${apiBaseUrl}Budget/UpdateBudget`;

        console.log(data);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return true;
        } catch (error) {
            console.error('Error UpdateBudget:', error);
            throw error;
        }
    }

    async updateBudgetCategory(id, category) {
        const url = `${apiBaseUrl}Budget/UpdateCategory`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: Number(id), category: category})
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return true;
        } catch (error) {
            console.error('Error UpdateBudget:', error);
            throw error;
        }
    }
}

export default ApiService;
