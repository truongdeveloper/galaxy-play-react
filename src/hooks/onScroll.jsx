import { useEffect, useState } from "react";

function OnScroll() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {;
        if(window.pageYOffset >= 100){
            setScroll(true);
        }else{
            setScroll(false);
        }}
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scroll;
}
export default OnScroll;