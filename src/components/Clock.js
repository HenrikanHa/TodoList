import React, { useState, useEffect } from 'react';

export const Clock = () => {
    const [time, setTime] = useState("00 : 00 : 00");

    const formatTime = (value) => {
        return value < 10 ? "0" + String(value) : value;
    };

    const fetchTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let formattedTime = `${formatTime(hours)} : ${formatTime(mins)} : ${formatTime(secs)}`;
        setTime(formattedTime);
    };

    useEffect(() => {
        const interval = setInterval(fetchTime, 1000);
        return () => clearInterval(interval);  // Cleanup on component unmount
    });

    return (
        <div className="clock">
            <h3>{time}</h3>
        </div>
    );
};
