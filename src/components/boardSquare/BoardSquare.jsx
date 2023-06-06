import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/ItemTypes.jsx'
// import { Overlay, OverlayType } from './Overlay.js'
import { Square } from './Square'
export const BoardSquare = ({ x, y, children, canvas }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BUTTON,
      canDrop: () => canvas.canMoveComponent( x, y),
      drop: (item) => canvas.moveComponent( item.compId, x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [canvas],
  )
//   const black = (x + y) % 2 === 1
  return (
    <div
      ref={drop}
      role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: 'relative',
        // width: '100%',
        height: '100%',
      }}
    >
      <Square>{children}</Square>
      {/* {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />} */}
      {/* {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />} */}
      {/* {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />} */}
    </div>
  )
}