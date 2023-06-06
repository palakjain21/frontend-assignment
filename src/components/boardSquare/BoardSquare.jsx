import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../utils/ItemTypes.jsx'
export const BoardSquare = ({ x, y, children, canvas }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BUTTON,
      canDrop: () => canvas.canMoveComponent(x, y),
      drop: (item) => canvas.moveComponent(x, y,item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [canvas],
  )
  return (
    <div
      ref={drop}
      role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: 'relative',
        height: '100%',
      }}
    >
      <>{children}</>
    </div>
  )
}
