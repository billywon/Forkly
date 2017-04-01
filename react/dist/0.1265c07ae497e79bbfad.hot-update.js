webpackHotUpdate(0,{

/***/ "./react/src/friends.jsx":
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./react/src/friends.jsx ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _viewRecipesNavBar = __webpack_require__(/*! ./viewRecipesNavBar */ \"./react/src/viewRecipesNavBar.jsx\");\n\nvar _viewRecipesNavBar2 = _interopRequireDefault(_viewRecipesNavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Friends = function (_React$Component) {\n  _inherits(Friends, _React$Component);\n\n  function Friends(props) {\n    _classCallCheck(this, Friends);\n\n    return _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).call(this, props));\n  }\n\n  //before initial render, use ajax call to retrieve all recipes belonging to user\n\n\n  _createClass(Friends, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var boundThis = this;\n      _jquery2.default.ajax({\n        url: '/getUserFriends',\n        type: 'GET',\n        success: function success(data) {\n          boundThis.setState({ friends: data });\n        },\n        error: function error(err) {\n          console.log('could not retrieve any recipes for user');\n        }\n      });\n    }\n  }, {\n    key: 'handleClick',\n    value: function handleClick(friendId) {\n      // redirects to friend\n      var router = this.context.router;\n\n      router.history.push('/friends/' + friendId);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var friendsList = [];\n      var template = '';\n      if (this.state) {\n        this.state.friends.forEach(function (friend, index) {\n          console.log(friend);\n          friendsList.push(_react2.default.createElement(\n            'li',\n            { className: 'recipeSingle',\n              key: index,\n              value: friend,\n              onClick: function onClick() {\n                return _this2.handleClick(friend._id);\n              } },\n            friend.name\n          ));\n        });\n        template = _react2.default.createElement(\n          'div',\n          { className: 'myRecipes' },\n          _react2.default.createElement(_viewRecipesNavBar2.default, null),\n          _react2.default.createElement(\n            'div',\n            { className: 'myRecipesTitle' },\n            'Friends'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'recipesArrays' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'recipesArray' },\n              friendsList\n            )\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('br', null)\n        );\n      } else {\n        template = _react2.default.createElement(\n          'div',\n          { className: 'myRecipes' },\n          _react2.default.createElement(_viewRecipesNavBar2.default, null),\n          _react2.default.createElement(\n            'div',\n            { className: 'loadingText' },\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              'h3',\n              null,\n              'You don\\'t have any friend, sorry'\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('br', null)\n          )\n        );\n      }\n      return template;\n    }\n  }]);\n\n  return Friends;\n}(_react2.default.Component);\n\nFriends.contextTypes = {\n  router: _react2.default.PropTypes.object\n};\n\nexports.default = Friends;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC9zcmMvZnJpZW5kcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3Qvc3JjL2ZyaWVuZHMuanN4P2JhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgVmlld1JlY2lwZXNOYXZCYXIgZnJvbSAnLi92aWV3UmVjaXBlc05hdkJhcic7XG5cbmNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vYmVmb3JlIGluaXRpYWwgcmVuZGVyLCB1c2UgYWpheCBjYWxsIHRvIHJldHJpZXZlIGFsbCByZWNpcGVzIGJlbG9uZ2luZyB0byB1c2VyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBib3VuZFRoaXMgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvZ2V0VXNlckZyaWVuZHMnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgYm91bmRUaGlzLnNldFN0YXRlKHtmcmllbmRzOiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnY291bGQgbm90IHJldHJpZXZlIGFueSByZWNpcGVzIGZvciB1c2VyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhmcmllbmRJZCkge1xuICAgIC8vIHJlZGlyZWN0cyB0byBmcmllbmRcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5jb250ZXh0XG4gICAgcm91dGVyLmhpc3RvcnkucHVzaCgnL2ZyaWVuZHMvJyArIGZyaWVuZElkKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGZyaWVuZHNMaXN0ID0gW107XG4gICAgdmFyIHRlbXBsYXRlID0gJyc7XG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUuZnJpZW5kcy5mb3JFYWNoKChmcmllbmQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhmcmllbmQpO1xuICAgICAgZnJpZW5kc0xpc3QucHVzaChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlY2lwZVNpbmdsZVwiXG4gICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgdmFsdWU9e2ZyaWVuZH0gXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhmcmllbmQuX2lkKX0+XG4gICAgICAgICAge2ZyaWVuZC5uYW1lfVxuICAgICAgICA8L2xpPilcbiAgICAgIH0pO1xuICAgICAgdGVtcGxhdGUgPSBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlSZWNpcGVzXCI+XG4gICAgICAgIDxWaWV3UmVjaXBlc05hdkJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15UmVjaXBlc1RpdGxlXCI+RnJpZW5kczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZXNBcnJheXNcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVjaXBlc0FycmF5XCI+XG4gICAgICAgICAgICB7ZnJpZW5kc0xpc3R9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZSA9IFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteVJlY2lwZXNcIj5cbiAgICAgICAgPFZpZXdSZWNpcGVzTmF2QmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1RleHRcIj4gXG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8aDM+WW91IGRvbid0IGhhdmUgYW55IGZyaWVuZCwgc29ycnk8L2gzPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGVtcGxhdGVcbiAgICApO1xuICB9XG59XG5cbkZyaWVuZHMuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVhY3Qvc3JjL2ZyaWVuZHMuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBR0E7Ozs7QUFuRUE7QUFDQTtBQXFFQTtBQUNBO0FBREE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})