'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @module reactors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @name ListView
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @type Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/

var ReactorsListView = function (_Component) {
  _inherits(ReactorsListView, _Component);

  function ReactorsListView(props) {
    _classCallCheck(this, ReactorsListView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactorsListView).call(this, props));

    _this.state = {
      dataSource: []
    };


    switch (_reactors2.default.platform) {
      default:
        throw new Error('Unknown platform: ' + _reactors2.default.platform);
      case 'mobile':
        _this.ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
            return r1 !== r2;
          } });
        _this.state.dataSource = _this.ds.cloneWithRows(_this.props.dataSource);
        break;
      case 'web':
      case 'desktop':
        _this.state.dataSource = _this.props.dataSource;
        break;
    }
    return _this;
  }

  _createClass(ReactorsListView, [{
    key: 'render',
    value: function render() {
      switch (_reactors2.default.platform) {
        default:
          throw new Error('Unknown platform: ' + _reactors2.default.platform);
        case 'mobile':
          return this._renderMobile();
        case 'web':
        case 'desktop':
          return this._renderWeb();
      }
    }
  }, {
    key: '_renderMobile',
    value: function _renderMobile() {
      var props = _extends({}, this.props);
      props.dataSource = this.state.dataSource;

      if (!('enableEmptySections' in props)) {
        props.enableEmptySections = true;
      }

      return _react2.default.createElement(_reactNative.ListView, props);
    }
  }, {
    key: '_renderWeb',
    value: function _renderWeb() {
      var _this2 = this;

      var lis = this.state.dataSource.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _this2.props.renderRow(item)
        );
      });
      return _react2.default.createElement(
        'ul',
        null,
        lis
      );
    }
  }]);

  return ReactorsListView;
}(_react.Component);

ReactorsListView.propTypes = {
  dataSource: _react.PropTypes.array
};
exports.default = ReactorsListView;