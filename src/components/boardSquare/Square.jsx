
const squareStyle = {
    width: '100%',
    height: '100%',
  }
  export const Square = ({ black, children }) => {
    const backgroundColor = black ? 'black' : 'white'
    const color = black ? 'white' : 'black'
    return (
      <div
        style={{
          // ...squareStyle,
          color,
          backgroundColor,
          border: '1px solid black',
        }}
      >
        {children}
      </div>
    )
  }