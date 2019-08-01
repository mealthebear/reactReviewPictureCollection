import React from 'react';
import Collection from './Collection.js'
import ImageFetcher from './ImageFetcher.js';
import ImageDisplay from './ImageDisplay.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      currentImage: null
    }
  }

  

  componentDidMount() {
    // change state to my props
    this.setState({ collection: this.props.collection })
  }

  render() {
    return (
    <div id="mainApp">
      <ImageFetcher options={this.props.options}/>
      <div className="collectionRow">
        <ImageDisplay />
        <Collection collection={this.state.collection}/>
      </div>
    </div>
    )
  }
}

export default App;