import compact from 'lodash/compact';

import border from './transforms/border';
import borderWidth from './transforms/borderWidth';
import boxShadow from './transforms/boxShadow';
import cursor from './transforms/cursor';
import display from './transforms/display';
import flexDirection from './transforms/flexDirection';
import marginHorizontal from './transforms/marginHorizontal';
import marginVertical from './transforms/marginVertical';
import Reactors from '../Core';
import resizeMode from './transforms/resizeMode';
import transform from './transforms/transform';
import transition from './transforms/transition';

export default class StyleSheet {
  static sheets = {};

  static create(styles) {
    if (Reactors.isMobile()) {
      const RNSS = require('react-native').StyleSheet;
      const sheet = RNSS.create(styles);
      for (const selector in sheet) {
        const number = sheet[selector];
        StyleSheet.sheets[number.toString()] = styles[selector];
      }
      return sheet;
    }
    return new this(styles);
  }

  static merge = (styles) => {
    const array = [];
    if (Array.isArray(styles)) {
      array.push(...compact(styles));
    } else {
      array.push(styles);
    }
    const transformed = {};
    array.forEach(style => {
      if (typeof style === 'number') {
        Object.assign(transformed, StyleSheet.sheets[style.toString()]);
      } else {
        Object.assign(transformed, style);
      }
    });
    return transformed;
  };

  static transform = (styles) => {
    const transformers = [
      border,
      borderWidth,
      boxShadow,
      cursor,
      display,
      flexDirection,
      marginHorizontal,
      marginVertical,
      resizeMode,
      transform,
      transition,
    ];
    let transformed = StyleSheet.merge(styles);
    transformers.forEach(transformer => {
      transformed = transformer(transformed);
    });
    return transformed;
  };

  constructor(rules: {}) {
    for (const selector in rules) {
      this[selector] = rules[selector];
    }
  }
}
