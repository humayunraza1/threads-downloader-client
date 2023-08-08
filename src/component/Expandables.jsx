import { useRef, useState } from "react";

function Expandables({ children }) {
    const fullTextRef = useRef(null);
    const [isFullTextVisible, setFullTextVisible] = useState(false);
    const toggleText = () => {
        setFullTextVisible(!isFullTextVisible);
    };
    return (
        <div ref={fullTextRef} className={`expand-wrapper ${isFullTextVisible && "rotate"}`} onClick={toggleText} >
            {children}
            {/* <div className={`expand-btn ${isFullTextVisible && "rotate"}`}><span>▼</span></div> */}
        </div>
    )
}

export default Expandables
