import React from 'react';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <p>Navigation will go here</p>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
