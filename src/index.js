const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // Below will retrieve this file now when the button is clicked. Called code-splitting
  System.import('./image_viewer').then(module => {
    module.default(); // image_viewer is being exported as a function to must call it with default
  });
};

document.body.appendChild(button);