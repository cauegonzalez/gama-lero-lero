import React, { Component } from 'react';

class Lerolero extends Component {
  render() {
    const {
      phrase
    } = this.props.phrase;

    return (
      <div className='lerolero'>
        <div className='lerolero-item'>
          {phrase}
        </div>
      </div>
    )
  }
}

export default Lerolero;
