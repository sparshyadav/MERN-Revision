import React, { useEffect, useState } from 'react';

const Six_FetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
            setData(result.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data.map((d, idx) => (
                <h1 key={idx}>{d.title}</h1> 
            ))}
        </div>
    );
}

export default Six_FetchData;
