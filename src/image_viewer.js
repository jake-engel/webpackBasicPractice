import small from '../assets/small.jpg';
import '../styles/image_viewer.css'

export default () => {
  const smallImage = document.createElement('img');
  smallImage.src = small;

  document.body.appendChild(smallImage);
}

// ADD THE STUFF BELOW TO SEE THE DIFFERENCE BETWEEN HOW BIG/SMALL IMAGES ARE ADDED TO BUNDLE

// import big from '../assets/big.jpg';
// const bigImage = document.createElement('img');
// bigImage.src = big;

// document.body.appendChild(bigImage);