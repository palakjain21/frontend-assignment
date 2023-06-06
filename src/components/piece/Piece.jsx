import DraggableComponents from "../dragabbleComponents/DraggableComponents";
export const Piece = ({ type, compId }) => {
    console.log(type, "piece");
    return (
        <DraggableComponents type={type} compId={compId}/>
    )
}
