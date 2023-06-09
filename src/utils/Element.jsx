export class Canvas {
  constructor() {
    const components = localStorage.getItem("components");
    if (components) {
      this.components = JSON.parse(components);
    }
  }

  ComponentPosition = [4, 4]; // initial position
  observers = []; // This array is used to keep track of observer functions that are interested in changes to the button component's position.
  components = {};

  //This method is used to register an observer function. It takes a function o as a parameter, adds it to the observers array, and emits a change notification by calling the emitChange() method. The method returns a cleanup function that can be used to remove the observer from the observers array.
  observe(o) {
    console.log("OBSERVE", o);
    this.observers.push(o);
    this.emitChange();
    return () => {
      this.observers = this.observers.filter((t) => t !== o);
    };
  }

  //This method is used to move the button component to a new position on the canvas. It takes the new coordinates toX and toY as parameters, updates the buttonComponentPosition accordingly, and emits a change notification by calling the emitChange() method.
  moveComponent(toX, toY, component) {
    console.log("MOVE", toX, toY, component);
    this.ComponentPosition = [toX, toY];
    const key = JSON.stringify([toX, toY]);
    const fromKey = JSON.stringify(component.coordinates);
    this.components[key] = this.components[fromKey];
    this.components[key].coordinates = [toX, toY];
    delete this.components[fromKey];
    localStorage.setItem("components", JSON.stringify(this.components));
    this.emitChange();
  }

  //This method is used to determine if it is valid to move the button component to the specified position (toX, toY). Currently, it always returns true without performing any checks.
  canMoveComponent(toX, toY) {
    const [x, y] = this.ComponentPosition;
    if (this.components[JSON.stringify([toX, toY])]) return false;
    return true;
  }
  addComponent(type) {
    console.log("EVENT CALLED");
    const key = [
      this.ComponentPosition[0],
      this.ComponentPosition[1] + 1,
    ];
    this.ComponentPosition = key;
    const component = { type: type, coordinates: key };
    this.components[JSON.stringify(key)] = component;
    localStorage.setItem("components", JSON.stringify(this.components));
  }
  // }

  //this method is responsible for notifying all registered observers about a change in the button component's position. It invokes each observer function in the observers array and passes the updated position as an argument.
  emitChange() {
    const pos = this.ComponentPosition;
    this.observers.forEach((o) => o && o(pos));
  }
}
