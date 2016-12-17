/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from './Image';

export default function ReactorsWebImage (props: $props): Element<*> {
  const webProps = Reactors.props(props);
  webProps.src = webProps.source;
  if (typeof webProps.src === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri;
  }
  delete webProps.source;
  // $FlowFixMe This is by design
  return <img {...webProps} />;
}
