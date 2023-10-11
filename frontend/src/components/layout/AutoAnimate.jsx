import {useEffect, useRef} from "react";
import autoAnimate from "@formkit/auto-animate";




export default function AutoAnimate(props) {
    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef]);

    return (
        <div ref={parentRef} className={props.className}>
            {props.children}
        </div>
  )
}