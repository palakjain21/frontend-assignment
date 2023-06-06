export class Canvas {
    buttonComponentPosition = [1, 7]// initial position 
    observers = [] // This array is used to keep track of observer functions that are interested in changes to the button component's position.

    //This method is used to register an observer function. It takes a function o as a parameter, adds it to the observers array, and emits a change notification by calling the emitChange() method. The method returns a cleanup function that can be used to remove the observer from the observers array.
    observe(o) {
      console.log("OBSERVE",o)
      this.observers.push(o)
      this.emitChange()
      return () => {
        this.observers = this.observers.filter((t) => t !== o)
      }
    }

    //This method is used to move the button component to a new position on the canvas. It takes the new coordinates toX and toY as parameters, updates the buttonComponentPosition accordingly, and emits a change notification by calling the emitChange() method.
    moveButtonComponent(toX, toY) {
      console.log("MOVE",toX,toY)
      this.buttonComponentPosition = [toX, toY]
      this.emitChange()
    }

   

    //This method is used to determine if it is valid to move the button component to the specified position (toX, toY). Currently, it always returns true without performing any checks.
    canMoveButton(toX, toY) {
      const [x, y] = this.buttonComponentPosition
      const dx = toX - x
      const dy = toY - y
      return true
    }

    //this method is responsible for notifying all registered observers about a change in the button component's position. It invokes each observer function in the observers array and passes the updated position as an argument.
    emitChange() {
      const pos = this.buttonComponentPosition
      this.observers.forEach((o) => o && o(pos))
    }
  }