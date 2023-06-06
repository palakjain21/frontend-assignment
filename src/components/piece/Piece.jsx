import DraggableComponents from "../dragabbleComponents/DraggableComponents";
export const Piece =({component})=>(
  component?<DraggableComponents component={component}/>:null
    )
