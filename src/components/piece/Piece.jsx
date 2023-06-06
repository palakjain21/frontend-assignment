import ButtonComponent from "../button/Button";
import DraggableComponents from "../dragabbleComponents/DraggableComponents";
export const Piece =({isButton})=>(
    isButton?<DraggableComponents type="button"/>:null
    )


