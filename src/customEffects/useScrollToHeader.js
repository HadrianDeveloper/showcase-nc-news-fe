import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScrollToHeader() {
    const loc = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0})
    }, [loc])
};