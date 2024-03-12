import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './RankedData.css'; // Import the CSS file

const RankedData = ({id}) => {
    console.log("RankedData"+id);
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:5000/api/olx")
        fetch("https://catalog-python-backend.onrender.com/api/olx")
            .then(res => res.json())
            .then(info => setData(info));
            // fetch({url})
    }, []);
    // useEffect(() => {
    //     async function fetchData(){ 
    //         const result=await fetch(`http://localhost:5000/api/${id}`);
    //         const body= await result.json();
    //         setData(body);
    // }
    // fetchData();
    // }, []);



    return (
        <div className="ranked-data">
            <h2 className="ranked-data-heading">Ranked Data</h2>
            <div className="card-container">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        {...item}
                        className="card"
                    />
                ))}
            </div>
        </div>
    );
};

export default RankedData;
