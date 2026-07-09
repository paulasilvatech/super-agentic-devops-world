import { useState, useEffect, useRef } from 'react';
export default function CountUp({ end, suffix = '', duration = 1500 }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting)
            setStarted(true); }, { threshold: 0.5 });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!started)
            return;
        const step = Math.ceil(end / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            }
            else {
                setCount(current);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, end, duration]);
    return <span ref={ref}>{count}{suffix}</span>;
}
