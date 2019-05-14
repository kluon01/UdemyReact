// Import react and react dom libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = ['Click Me!',10,20];
    const labelText = 'Enter name: ';
    const style = {backgroundColor: 'blue', color: 'white', border: '2px solid black'};

    console.log('Hi');

    return (
        <div>
            <label className='label' htmlFor='name'> 
                {labelText} 
            </label>
            <input id='name' />
            <button style={style}> 
                {buttonText} 
            </button>
        </div>
    ); 
}

// Take the react compnent and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
