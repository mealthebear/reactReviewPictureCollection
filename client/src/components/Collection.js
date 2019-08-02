import React from 'react';
import CollectionItem from './CollectionItem.js';

var Collection = (props) => {
  return (
  <div className="container" id="collection">
    <CollectionItem/>
    <CollectionItem/>
    <CollectionItem/>
    <CollectionItem/>
  </div>
  )
}

export default Collection