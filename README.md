
# App Builder

This is a simple App builder application that allows users to create and manipulate components on a canvas. The application provides the following features:

- Users can click on buttons to create components (buttons, inputs, dropdowns, and tables) on the canvas.
- Components can be dragged around the canvas.
- The canvas has a fixed grid, and components snap to the grid locations.
- The positions of the components are remembered across page refreshes using local storage.

## Screenshots
![Screenshot from 2023-06-07 03-19-25-1](https://github.com/palakjain21/frontend-assignment/assets/56087514/d45974f8-bae5-49ae-a31f-3c8cf1a3ff30)
![Screenshot from 2023-06-07 03-19-40](https://github.com/palakjain21/frontend-assignment/assets/56087514/fc9102fc-8794-458a-8847-a7f878f8d848)

## Technologies Used

- React: JavaScript library for building user interfaces.
- React-dnd: Used for dragging and dropping components on the canvas.
- Tailwind CSS: Styling the components and canvas layout.
- Dasiy UI: DaisyUI adds component class names to Tailwind CSS to write the components faster
- Local Storage: Used to store component positions across page refreshes.

## Getting Started

### Prerequsites

    Node version > 14
    Install dependencies by running npm i

### How to run locally

    Run npm run dev

## Usage

    On the sidebar, click on the buttons to create components on the canvas.
    Drag the components on the canvas to reposition them.
    The components will snap to the grid locations on the canvas.
    The positions of the components are automatically saved in the local storage.

## Future Enhancements

Here are some potential enhancements that can be made to improve the application:

    Implement a more flexible grid system with dynamic sizing.
    Improve the user interface and add more styling.
    Implement the functionality to remove components from the canvas.
    Allow users to resize components.
    Implement additional component types.
    Use redux(state management library) for more complex implemetation.
    
## Deployment
    Platform: Vercel
    Link: https://frontend-assignment-lemon.vercel.app/
