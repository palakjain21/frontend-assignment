import React from "react";
const ButtonComponent = React.forwardRef(({ isDragging }, ref) => {
  const opacity = isDragging ? 0.5 : 1;

  return (
    <button
      className="btn btn-info bg-sky-400 rounded-md w-[103px] z-50"
      ref={ref}
      style={{ opacity, cursor: "move" }}
    >
      Button
    </button>
  );
});

export default ButtonComponent;
