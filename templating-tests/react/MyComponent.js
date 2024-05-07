"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MyComponent = function MyComponent(_ref) {
  var pageTitle = _ref.pageTitle,
    welcomeMessage = _ref.welcomeMessage,
    showOptions = _ref.showOptions,
    optionsAvailable = _ref.optionsAvailable,
    options = _ref.options,
    dynamicList = _ref.dynamicList,
    currentYear = _ref.currentYear;
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: "en"
  }, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/_react["default"].createElement("title", null, pageTitle), /*#__PURE__*/_react["default"].createElement("style", null, "\n          body {\n              font-family: Arial, sans-serif;\n              margin: 0;\n              padding: 0;\n          }\n          header {\n              background-color: #0055a6; /* Blue */\n              color: #fff;\n              padding: 20px;\n              text-align: center;\n          }\n          nav ul {\n              list-style-type: none;\n              margin: 0;\n              padding: 0;\n              text-align: center;\n          }\n          nav ul li {\n              display: inline;\n              margin-right: 10px;\n          }\n          main {\n              padding: 20px;\n              margin: 20px auto;\n              background-color: #fff;\n              border-radius: 5px;\n              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n              max-width: 800px;\n          }\n          h1, h2 {\n              color: #0055a6; /* Blue */\n          }\n          p {\n              line-height: 1.6;\n          }\n          ul {\n              list-style-type: none;\n              padding: 0;\n          }\n          li {\n              margin-bottom: 10px;\n          }\n          footer {\n              background-color: #0055a6; /* Blue */\n              color: #fff;\n              text-align: center;\n              padding: 20px;\n          }\n          ")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h1", null, pageTitle), /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    style: {
      color: '#fff'
    }
  }, "Home")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    style: {
      color: '#fff'
    }
  }, "About")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    style: {
      color: '#fff'
    }
  }, "Contact"))))), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Welcome to Our Website"), /*#__PURE__*/_react["default"].createElement("p", null, welcomeMessage), /*#__PURE__*/_react["default"].createElement("h2", null, "Conditional Options"), showOptions ? optionsAvailable ? /*#__PURE__*/_react["default"].createElement("ul", null, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("li", null, option.name, " - ", option.price);
  })) : /*#__PURE__*/_react["default"].createElement("p", null, "No options available.") : /*#__PURE__*/_react["default"].createElement("p", null, "Options are hidden."), /*#__PURE__*/_react["default"].createElement("h2", null, "Dynamically Loaded List"), /*#__PURE__*/_react["default"].createElement("ul", null, dynamicList.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", null, item.name, " - ", item.description);
  }))), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("p", null, "\xA9 ", currentYear, " Dynamic HTML Template"))));
};
var _default = exports["default"] = MyComponent;
