import React from "react";

const Dropdown = React.forwardRef(({ isDragging }, ref) => {
    return(
        <div className="dropdown z-50" ref={ref} onClick={(event)=>{isDragging?event.preventDefault():null}}>
  <label tabIndex={0} className="btn btn-info m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    )
})

export default Dropdown;
