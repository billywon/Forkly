webpackHotUpdate(0,{

/***/ "./react/src/friends.jsx":
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./react/src/friends.jsx ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/react.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _viewRecipesNavBar = __webpack_require__(/*! ./viewRecipesNavBar */ \"./react/src/viewRecipesNavBar.jsx\");\n\nvar _viewRecipesNavBar2 = _interopRequireDefault(_viewRecipesNavBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Friends = function (_React$Component) {\n  _inherits(Friends, _React$Component);\n\n  function Friends(props) {\n    _classCallCheck(this, Friends);\n\n    return _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).call(this, props));\n  }\n\n  //before initial render, use ajax call to retrieve all recipes belonging to user\n\n\n  _createClass(Friends, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var boundThis = this;\n      _jquery2.default.ajax({\n        url: '/getUserFriends',\n        type: 'GET',\n        success: function success(data) {\n          boundThis.setState({ friends: data });\n        },\n        error: function error(err) {\n          console.log('could not retrieve any recipes for user');\n        }\n      });\n    }\n  }, {\n    key: 'handleClick',\n    value: function handleClick(id) {\n      var boundThis = this;\n      _jquery2.default.ajax({\n        url: '/friends/' + id,\n        type: 'GET',\n        success: function success(data) {\n          console.log('successfully found friend!', data);\n          boundThis.setState({ friendRecipes: data });\n        },\n        error: function error(err) {\n          console.log('could not retrieve any recipes for user');\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var friendsList = [];\n      var recipesArray = [];\n      var template = '';\n      if (this.state) {\n        this.state.friends.forEach(function (friend, index) {\n          friendsList.push(_react2.default.createElement(\n            'li',\n            { className: 'recipeSingle',\n              key: index,\n              value: friend,\n              onClick: function onClick() {\n                return _this2.handleClick(friend.id);\n              } },\n            friend.name\n          ));\n        });\n        console.log(this.state.friendRecipes);\n        if (this.state.friendRecipes) {\n          this.state.friendRecipes.forEach(function (recipe, index) {\n            recipesArray.push(_react2.default.createElement(\n              'li',\n              { className: 'recipeSingle',\n                key: index,\n                value: recipe,\n                onClick: function onClick() {\n                  return _this2.handleClick(recipe._id);\n                } },\n              recipe.name\n            ));\n          });\n        }\n        template = _react2.default.createElement(\n          'div',\n          { className: 'myRecipes' },\n          _react2.default.createElement(_viewRecipesNavBar2.default, null),\n          _react2.default.createElement(\n            'div',\n            { className: 'myRecipesTitle' },\n            'Friends'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'recipesArrays' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'recipesArray' },\n              friendsList\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'recipesArrays' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'recipesArray' },\n              recipesArray\n            )\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('br', null)\n        );\n      } else {\n        template = _react2.default.createElement(\n          'div',\n          { className: 'myRecipes' },\n          _react2.default.createElement(_viewRecipesNavBar2.default, null),\n          _react2.default.createElement(\n            'div',\n            { className: 'loadingText' },\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              'h3',\n              null,\n              'You don\\'t have any friend, sorry'\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('br', null)\n          )\n        );\n      }\n      return template;\n    }\n  }]);\n\n  return Friends;\n}(_react2.default.Component);\n\nFriends.contextTypes = {\n  router: _react2.default.PropTypes.object\n};\n\nexports.default = Friends;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC9zcmMvZnJpZW5kcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3Qvc3JjL2ZyaWVuZHMuanN4P2JhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgVmlld1JlY2lwZXNOYXZCYXIgZnJvbSAnLi92aWV3UmVjaXBlc05hdkJhcic7XG5cbmNsYXNzIEZyaWVuZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vYmVmb3JlIGluaXRpYWwgcmVuZGVyLCB1c2UgYWpheCBjYWxsIHRvIHJldHJpZXZlIGFsbCByZWNpcGVzIGJlbG9uZ2luZyB0byB1c2VyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBib3VuZFRoaXMgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvZ2V0VXNlckZyaWVuZHMnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgYm91bmRUaGlzLnNldFN0YXRlKHtmcmllbmRzOiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnY291bGQgbm90IHJldHJpZXZlIGFueSByZWNpcGVzIGZvciB1c2VyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhpZCkge1xuICAgIHZhciBib3VuZFRoaXMgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IGAvZnJpZW5kcy8ke2lkfWAsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IGZvdW5kIGZyaWVuZCEnLCBkYXRhKTtcbiAgICAgICAgYm91bmRUaGlzLnNldFN0YXRlKHtmcmllbmRSZWNpcGVzOiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnY291bGQgbm90IHJldHJpZXZlIGFueSByZWNpcGVzIGZvciB1c2VyJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGZyaWVuZHNMaXN0ID0gW107XG4gICAgdmFyIHJlY2lwZXNBcnJheSA9IFtdO1xuICAgIHZhciB0ZW1wbGF0ZSA9ICcnO1xuICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlLmZyaWVuZHMuZm9yRWFjaCgoZnJpZW5kLCBpbmRleCkgPT4ge1xuICAgICAgZnJpZW5kc0xpc3QucHVzaChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlY2lwZVNpbmdsZVwiXG4gICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgdmFsdWU9e2ZyaWVuZH0gXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhmcmllbmQuaWQpfT5cbiAgICAgICAgICB7ZnJpZW5kLm5hbWV9XG4gICAgICAgIDwvbGk+KVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZyaWVuZFJlY2lwZXMpO1xuICAgICAgaWYodGhpcy5zdGF0ZS5mcmllbmRSZWNpcGVzKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcmllbmRSZWNpcGVzLmZvckVhY2goKHJlY2lwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmVjaXBlc0FycmF5LnB1c2goXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlY2lwZVNpbmdsZVwiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFsdWU9e3JlY2lwZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2socmVjaXBlLl9pZCl9PlxuICAgICAgICAgICAge3JlY2lwZS5uYW1lfVxuICAgICAgICAgIDwvbGk+KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlID0gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15UmVjaXBlc1wiPlxuICAgICAgICA8Vmlld1JlY2lwZXNOYXZCYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteVJlY2lwZXNUaXRsZVwiPkZyaWVuZHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNpcGVzQXJyYXlzXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlY2lwZXNBcnJheVwiPlxuICAgICAgICAgICAge2ZyaWVuZHNMaXN0fVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZXNBcnJheXNcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVjaXBlc0FycmF5XCI+XG4gICAgICAgICAgICB7cmVjaXBlc0FycmF5fVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L2Rpdj5cbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGxhdGUgPSBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlSZWNpcGVzXCI+XG4gICAgICAgIDxWaWV3UmVjaXBlc05hdkJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdUZXh0XCI+IFxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGgzPllvdSBkb24ndCBoYXZlIGFueSBmcmllbmQsIHNvcnJ5PC9oMz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRlbXBsYXRlXG4gICAgKTtcbiAgfVxufVxuXG5GcmllbmRzLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVhY3Qvc3JjL2ZyaWVuZHMuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVNBO0FBQ0E7QUFHQTs7OztBQTlGQTtBQUNBO0FBZ0dBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})