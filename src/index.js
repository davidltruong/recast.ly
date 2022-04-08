// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
import searchYouTube from './lib/searchYouTube.js';

// import exampleVideoData from './src/data/exampleVideoData.js';

ReactDOM.render(<App searchYoutube={searchYouTube}/>, document.getElementById('app'));
