import React from 'react';

import Navigation from 'Navigation';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
