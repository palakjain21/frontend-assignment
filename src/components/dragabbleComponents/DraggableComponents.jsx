// take type as prop and render accordingly
// use useDrag hook to make the component draggable

import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/ItemTypes";
import ButtonComponent from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import Input from "../input/Input";
import Table from "../table/Table";

const DraggableComponents = ({ type , compId}) => {
    console.log(type, "drag");

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BUTTON,
        item: {
            type,compId
        },
    
        //The collect function is used to collect information about the drag state. It receives a monitor object as a parameter, which provides information about the drag operation. In this case, it checks if the button is currently being dragged by accessing monitor.isDragging() and returns an object with the isDragging property set to true or false.
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }), [])

    
      return (
        <div>
        {type === 'button' && <ButtonComponent ref={drag} isDragging={isDragging}/>}
        {type === 'dropdown' && <Dropdown ref={drag} />}
        {type === 'input' && <Input ref={drag}/>}
        {type === 'table' && <Table ref={drag}/>}
      </div>
        );
}

export default DraggableComponents;

