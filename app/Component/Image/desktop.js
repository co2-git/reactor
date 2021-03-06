/**
  * @module reactors
  * @flow
**/
import React, {Component} from 'react';

export default class ReactorsImageDesktop extends Component {

  render() {
    const webProps = {...this.props};

    webProps.src = webProps.source;

    if (typeof webProps.src === 'object' && webProps.src.uri) {
      webProps.src = webProps.src.uri.replace(/^\.\./, '.');
    } else if (typeof webProps.src === 'string') {
      webProps.src = webProps.src.replace(/^\.\./, '.');
    }

    delete webProps.source;

    return <img {...webProps} />;
  }

}
