import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
// import debounce from '../lodash.debounce';


var getVideoData = function() {
  var randomIdx = Math.floor(Math.random() * exampleVideoData.length);
  return exampleVideoData[randomIdx];
};

var video = getVideoData();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: exampleVideoData[4],
      input: ''
    };
    this.clickVideo = this.clickVideo.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    var that = this;
    this.props.searchYouTube('React', function (data) {
      that.setState({videos: data, video: data[0]});
    });
  }

  // debounce(func, timeout) {
  //   console.log('test');
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
  //   };
  // }

  // debounce(fn, delay) {
  //   console.log('test');
  //   var timer = null;
  //   return function() {
  //     var context = this;
  //     args = arguments;
  //     clearTimeout(timer);
  //     timer = setTimeout(function() {
  //       fn.apply(context, args);
  //     }, delay);
  //   };
  // }

  debounce(fn, delay) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  }

  inputHandler(e) {
    var query = e.target.value.toLowerCase();
    this.setState({
      input: query
    });
    var that = this;
    this.props.searchYouTube(query, function (data) {
      that.setState({videos: data, video: data[0]});
    });
  }

  // inputHandler(e) {
  //   var query = e.target.value.toLowerCase();
  //   this.setState({
  //     input: query
  //   });

  // }


  // handleInput(e) {
  //   var query = e.target.value.toLowerCase();
  //   var q = this.state.input;
  //   var that = this;
  //   setTimeout(function() {
  //     this.setState({
  //       input: query
  //     });
  //     that.props.searchYouTube(q, function (data) {
  //       that.setState({videos: data, video: data[0]});
  //     });
  //   }, 500);
  // }


  handleSubmit() {
    var q = this.state.input;
    var that = this;
    this.props.searchYouTube(q, function (data) {
      that.setState({videos: data, video: data[0]});
    });
  }

  clickVideo(e) {
    this.setState({video: e});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search query={this.inputHandler} sub={this.handleSubmit}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.video} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} clickVideo={this.clickVideo}/></div>
          </div>
        </div>
      </div>
    );
  }


  changeVideo() {
    document.getElementsByClassName('.video-list-entry-title').attr('title', 'Item Added');
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
