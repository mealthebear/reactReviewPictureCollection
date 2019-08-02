import React from 'react';
import ImageFetcher from './ImageFetcher.js';
import ImageDisplay from './ImageDisplay.js';
import Collection from './Collection.js';

class App extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
      images: []
     }
  }

  componentDidMount() {
    this.setState({
      images: this.props.collection
    }, () => console.log(this.state))
  }

  render() {
    return(
    <div id="mainApp">
      <ImageFetcher/>
      <div className="collectionRow">
        <ImageDisplay/>
        <Collection/>
      </div>
    </div>
    )
  }

}

export default App