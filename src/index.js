// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';

// import exampleVideoData from './src/data/exampleVideoData.js';

ReactDOM.render(<App data={exampleVideoData}/>, document.getElementById('app'));
