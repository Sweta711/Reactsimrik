import { useEffect, useState } from "react";

export default function useScrollDirection() {
const [direction, setDirection] = useState("down");

useEffect(() => {
let lastY = window.scrollY;

const update = () => {
    const currentY = window.scrollY;
    if (currentY < lastY) {
    setDirection("up");
    } else {
    setDirection("down");
    }
    lastY = currentY;
};

window.addEventListener("scroll", update);
return () => window.removeEventListener("scroll", update);
}, []);

return direction;
}
