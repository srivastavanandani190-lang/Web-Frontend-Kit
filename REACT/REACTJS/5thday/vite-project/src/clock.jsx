import { useEffect, useState } from "react";
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);
    return (
        <div>
            <h1 style={{color: "blue", justifyContent: "center", alignItems: "center", display: "flex"}}>Clock</h1>
            <h2 style={{color: "green", justifyContent: "center", alignItems: "center", display: "flex"}}>{time}</h2>
        </div>
    );
}   
export default Clock;
