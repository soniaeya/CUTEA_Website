import { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8000/');
            const data = await response.json();
            setMessage(data.message);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>This is my message: {message}</h1>
        </div>
    );
}

export default App;