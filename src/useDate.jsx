import { useEffect, useState } from "react";

function useDate() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // cleanup
    }, []);

    return currentTime;
}

export default useDate;
