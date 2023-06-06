import React from "react";
import "./Input.css";
const Input = React.forwardRef(({ isDragging }, ref) => {
    return(
            <textarea ref={ref} placeholder="Type here" className="p-2 z-50 rounded-sm textareaProp"/>
        );
}
);

export default Input;