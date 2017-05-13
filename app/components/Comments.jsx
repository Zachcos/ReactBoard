import React from 'react';

export class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isCommenting: false}
  }
  render() {
    return <p>Does this work?</p>
  }
}


export default Comments;
