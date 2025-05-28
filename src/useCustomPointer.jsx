import { useEffect, useState } from "react";

function useCustomPointer(content) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            document.body.style.cursor = "auto";
        };
    }, []);

    const pointerStyle = {
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",

    };

    return <div style={pointerStyle}>{content}</div>;
}

export default useCustomPointer;
