// import react from "react";
// import react from "react";
// import { useDrag } from "react-dnd";
// import { ItemTypes } from "../../utils/ItemTypes";

// const ButtonComponent = () => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemTypes.BUTTON,

//     //The collect function is used to collect information about the drag state. It receives a monitor object as a parameter, which provides information about the drag operation. In this case, it checks if the button is currently being dragged by accessing monitor.isDragging() and returns an object with the isDragging property set to true or false.
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging()
//     })
//   }), [])

//   return (
//     <button className="btn btn-info bg-sky-400 rounded-md w-[103px]" ref={drag}
//       style={{
//         cursor: 'move',
//         opacity: isDragging ? 0.5 : 1,
//       }}> Button </button>
//   );
// }

// export default ButtonComponent;

import React from "react";
const ButtonComponent = React.forwardRef(({ isDragging }, ref) => {
    const opacity = isDragging ? 0.5 : 1;
  
    return (
      <button className="btn btn-info bg-sky-400 rounded-md w-[103px] z-50" ref={ref} style={{ opacity, cursor: "move"}}>
        Button
      </button>
    );
  });

    export default ButtonComponent;