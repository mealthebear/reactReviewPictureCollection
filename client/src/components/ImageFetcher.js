import React from 'react';

var ImageFetcher = (props) => {

const handleClick = (value) => {
  //let value = event.target.value
  console.log('clicked', value); 
}

  return (
  <div className="container">
    {props.options.map((option, i) => {
      return <button key={i} onClick={() => handleClick(option)} value={option}>{option}</button>
    })}
  </div>
  )
}

export default ImageFetcher